import React from 'react';
import './HomePage.css';
import Icon1 from '../assets/svg/icon1.svg'; // Corrected path
import Icon2 from '../assets/svg/icon2.svg'; // Corrected path
import Icon3 from '../assets/svg/icon3.svg'; // Corrected path
import Icon4 from '../assets/svg/icon4.svg'; // Corrected path

function HomePage() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Prime Minister's Special Scholarship Scheme (PMSSS)</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="/">Upload Document</a></li>
              <li><a href="/">Check Status</a></li>
              <li><a href="/">Learn More</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">       
          <h2>Paperless Scholarship Disbursement System</h2>
          <p>A secure, efficient and transparent way to manage scholarship applications and disbursements</p>
          <div className="buttons">
            <button className="btn-primary">Proceed</button>
            <button className="btn-secondary">Learn More</button>
          </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">

          <ul className="footer-links">
            <li><a href="/">Submit</a></li>
            <li><a href="/">Track</a></li>
            <li><a href="/">Explore</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          
        <div className="footer-logos">
            <img src={Icon1} alt="Icon 1" className="footer-logo" />
            <img src={Icon2} alt="Icon 2" className="footer-logo" />
            <img src={Icon3} alt="Icon 3" className="footer-logo" />
            <img src={Icon4} alt="Icon 4" className="footer-logo" />
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
