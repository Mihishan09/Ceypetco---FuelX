import React, { useState } from 'react';
import '../styles/EmployeeProfile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Payment from './Payment';
import IncomeExpenses from './IncomeExpenses';
import Petrol92Octane from './Petrol92Octane';

const EmployeeProfile = () => {
  const [page, setPage] = useState('profile');

  if (page === 'payment') {
    return (
      <div className="profile-container">
        <Header onPaymentClick={() => {}} onIncomeClick={() => setPage('income')} onDailyClick={() => setPage('daily')} />
        <Payment />
        <Footer />
      </div>
    );
  }

  if (page === 'income') {
    return (
      <div className="profile-container">
        <Header onPaymentClick={() => setPage('payment')} onIncomeClick={() => {}} onDailyClick={() => setPage('daily')} />
        <IncomeExpenses />
        <Footer />
      </div>
    );
  }

  if (page === 'daily') {
    return (
      <div className="profile-container">
        <Header onPaymentClick={() => setPage('payment')} onIncomeClick={() => setPage('income')} onDailyClick={() => {}} />
        <Petrol92Octane />
        <Footer />
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Header onPaymentClick={() => setPage('payment')} onIncomeClick={() => setPage('income')} onDailyClick={() => setPage('daily')} />
      <div className="profile-content">
        <header className="profile-header">
          <img className="profile-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
          <div className="profile-info">
            <h1>Thaveen Shamalka</h1>
            <p><span>ID :</span> 1202</p>
            <p><span>Phone NO:</span> 0760589655</p>
            <p><span>Job :</span> Fuel Pumper Operater</p>
          </div>
        </header>
        <nav className="profile-nav">
          <button className="nav-btn active">Attendance</button>
          <button className="nav-btn">Salary</button>
          <button className="nav-btn">Daily Records</button>
        </nav>
        <section className="profile-section">
          <h2>Attendence</h2>
          <div className="table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Monday</th>
                  <th>Tuesdays</th>
                  <th>Wednesdays</th>
                  <th>Thursdays</th>
                  <th>Fridays</th>
                  <th>Saturdays</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attenders</td>
                  <td className="green">07</td>
                  <td className="">08</td>
                  <td className="red">09</td>
                  <td className="green">10</td>
                  <td className="green">11</td>
                  <td className="green">12</td>
                  <td className="red">13</td>
                </tr>
                <tr>
                  <td>Attenders</td>
                  <td className="red">14</td>
                  <td className="green">15</td>
                  <td className="green">16</td>
                  <td className="green">17</td>
                  <td className="green">18</td>
                  <td className="green">19</td>
                  <td className="green">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="profile-section">
          <h2>Expenses</h2>
          <div className="table-wrapper">
            <table className="expenses-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Monday</th>
                  <th>Tuesdays</th>
                  <th>Wednesdays</th>
                  <th>Thursdays</th>
                  <th>Fridays</th>
                  <th>Saturdays</th>
                  <th>Sunday</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Expenses</td>
                  <td>Rs.500</td>
                  <td>-</td>
                  <td>Rs.250</td>
                  <td>Rs.1200</td>
                  <td>Rs.670</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Rs.2620</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="profile-section salary-section">
          <h2>Salary</h2>
          <div className="salary-details">
            <div className="salary-row">
              <span>Payment Methods</span>
              <div className="salary-bar"></div>
            </div>
            <div className="salary-row">
              <span>Expenses</span>
              <div className="salary-bar"></div>
            </div>
            <div className="salary-row">
              <span>Other payment</span>
              <div className="salary-bar"></div>
            </div>
            <div className="salary-row total">
              <span>TOTAL Salary</span>
              <div className="salary-bar total-bar"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeProfile; 