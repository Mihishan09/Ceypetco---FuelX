import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section company">
          <h2>Ceypetco Fuel:X</h2>
          <p>Empowering smart fuel logistics and station control across Sri Lanka.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Summary</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: support@ceypetco.lk</p>
          <p>Phone: +94 11 234 5678</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Ceypetco Fuel:X. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 