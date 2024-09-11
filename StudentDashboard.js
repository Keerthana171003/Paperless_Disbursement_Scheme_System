import React, { useState } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  var [documents, setDocuments] = useState([]);
  var [uploading, setUploading] = useState(false);

  // student data
  var student = {
    name: "John Doe",
    picture: "https://tse1.mm.bing.net/th?id=OIP.QGyOycR0GI6n-AEd0h0DhwHaHa&pid=Api&P=0&h=180",
    registerNumber: "123456789",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    progress: "70",
    pastSubmissions: "No past submissions available.",
    documentsRequired: ["Identity Proof", "Academic Certificates", "Proof of Address"],
    programOfStudy: "Computer Science",
    scholarships: [
      { name: "Academic Excellence Scholarship", amount: "$5000", disbursementDate: "2023-09-01", pendingAmount: "$0" },
      { name: "Need-Based Grant", amount: "$2000", disbursementDate: "2024-01-15", pendingAmount: "$500" }
    ],
    tasks: ["Submit academic certificate", "Verify identity proof"],
  };

  var submitDocuments = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert("Documents uploaded successfully!");
    }, 2000);
  };

  return (
    <>
      {/* Header outside the container */}
      <header className="dashboard-header">
        <h1>STUDENT DASHBOARD</h1>
      </header>

      <div className="dashboard-container">
        <div className="student-details">
          <div className="student-picture">
            <img src={student.picture} alt="Student" />
          </div>
          <div className="student-info">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Register Number:</strong> {student.registerNumber}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Address:</strong> {student.address}</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-section">
            <h2>Application Progress</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${student.progress}%` }}></div>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Past Submissions</h2>
            <p>{student.pastSubmissions}</p>
          </div>

          <div className="dashboard-section">
            <h2>Required Documents</h2>
            <ul>
              {student.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          <div className="dashboard-section">
            <h2>Program of Study</h2>
            <p>{student.programOfStudy}</p>
          </div>

          <div className="dashboard-section">
            <h2>Scholarships and Financial Aid</h2>
            <ul>
              {student.scholarships.map((scholarship, index) => (
                <li key={index}>
                  <strong>{scholarship.name}:</strong> {scholarship.amount}, Disbursed on: {scholarship.disbursementDate}, Pending Amount: {scholarship.pendingAmount}
                </li>
              ))}
            </ul>
          </div>

          <div className="dashboard-section">
            <h2>Tasks and Next Steps</h2>
            <ul>
              {student.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
