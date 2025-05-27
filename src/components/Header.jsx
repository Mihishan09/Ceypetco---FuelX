import React from 'react';
import '../styles/Header.css';
import ceypetcoLogo from '../assets/ceypetco_logo.png';

const Header = ({ onPaymentClick, onIncomeClick, onDailyClick }) => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={ceypetcoLogo} alt="Ceypetco Logo" />
      </div>
      <nav className="header-nav">
        <a href="#" className="nav-link">Home</a>
        <button className="nav-link nav-btn-link" onClick={onIncomeClick}>Income & Expenses</button>
        <button className="nav-link nav-btn-link" onClick={onPaymentClick}>Payment</button>
        <button className="nav-link nav-btn-link" onClick={onDailyClick}>Daily Details</button>
        <a href="#" className="nav-link">Browser Details</a>
        <a href="#" className="nav-link">Summary</a>
      </nav>
      <button className="logout-btn">Logout</button>
    </header>
  );
};

export default Header; 