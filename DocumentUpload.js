import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './DocumentUpload.css';

function DocumentUpload() {
  const [files, setFiles] = useState([]);

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file), // Create URL for preview
        })
      )
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*, application/pdf',
    maxSize: 10485760, // 10MB limit
  });

  // Cleanup previews on component unmount
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  // Remove file
  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  // Handle file submission
  const handleSubmit = () => {
    if (files.length > 0) {
      // Logic to handle secure file submission
      console.log("Submitting files:", files);

      // After successful submission, clear the files
      setFiles([]);
      alert('Documents submitted successfully!');
    } else {
      alert('Please upload at least one document.');
    }
  };

  return (
    <>
      {/* Heading */}
      <h1 className="page-heading">Document Upload</h1>

      <div className="container">
        {/* Left Section: Instructions */}
        <div className="left-section">
          <h2>Upload Required Documents</h2>
          <p>Please upload the necessary documents for submission.</p>
          <ul>
            <li>Accepted Formats: PDF, JPEG, PNG</li>
            <li>Maximum file size: 10MB</li>
          </ul>
        </div>

        {/* Right Section: Upload Zone */}
        <div className="right-section">
          {/* Drag-and-Drop Zone */}
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
          </div>

          {/* File Preview */}
          <div className="preview">
            {files.map((file) => (
              <div key={file.name} className="preview-item">
                {file.type.startsWith('image') ? (
                  <img src={file.preview} alt={file.name} width="100" />
                ) : file.type === 'application/pdf' ? (
                  <div>
                    <p>{file.name}</p>
                    <a href={file.preview} target="_blank" rel="noopener noreferrer">
                      View document
                    </a>
                  </div>
                ) : (
                  <p>{file.name}</p>
                )}
                <button onClick={() => removeFile(file.name)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button className="submit-button" onClick={handleSubmit}>
            Submit Documents
          </button>
        </div>
      </div>
    </>
  );
}

export default DocumentUpload;
