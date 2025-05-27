import React from 'react';
import '../styles/Payment.css';

const employees = [
  {
    name: 'Thaveen Shamalka',
    id: '1202',
    job: 'Fuel Pumper Operater',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bold: false,
  },
  {
    name: 'Janee Thamika',
    id: '1202',
    job: 'Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bold: true,
  },
];

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="employee-cards">
        {employees.map((emp, idx) => (
          <div className="employee-card" key={emp.name}>
            <img className="employee-avatar" src={emp.avatar} alt={emp.name} />
            <button className="next-btn">NEXT</button>
            <div className="employee-info">
              <div className={emp.bold ? 'emp-name bold' : 'emp-name'}>{emp.name}</div>
              <div className="emp-id">ID : {emp.id}</div>
              <div className="emp-job">Job : {emp.job}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment; 