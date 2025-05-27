import React from 'react';
import '../styles/IncomeExpenses.css';

const IncomeExpenses = () => {
  return (
    <div className="income-expenses-container">
      <div className="ie-section ie-income">
        <h2>INCOME</h2>
        <div className="ie-table-row">
          <div className="ie-labels">
            <div>Lanka Petrol 92 Octane</div>
            <div>Lanka Petrol 95 Octane</div>
            <div>Lanka Auto Diesel</div>
            <div>Lanka Super Diesel</div>
            <div>Card Payment</div>
            <div className="bold">Other income</div>
          </div>
          <div className="ie-bars">
            <div className="ie-bar" />
            <div className="ie-bar" />
            <div className="ie-bar" />
            <div className="ie-bar" />
            <div className="ie-bar" />
            <div className="ie-bar" />
          </div>
          <div className="ie-totals">
            <div className="ie-total-box green">
              <span>Total Fuel Income</span>
              <span>Rs.0000.00</span>
            </div>
            <div className="ie-total-box green">
              <span>Total Fuel Income<br />(Without pyment)</span>
              <span>Rs.0000.00</span>
            </div>
          </div>
        </div>
        <div className="ie-main-total">
          <span>Income</span>
          <span>Rs.0000.00</span>
        </div>
      </div>
      <div className="ie-section ie-expenses">
        <h2>EXPENSES</h2>
        <div className="ie-table-row">
          <div className="ie-labels">
            <div>Salary</div>
            <div>Browser Payment</div>
            <div>Other payments</div>
          </div>
          <div className="ie-bars">
            <div className="ie-bar" />
            <div className="ie-bar" />
            <div className="ie-bar" />
          </div>
        </div>
        <div className="ie-main-total expense">
          <span>Expenses</span>
          <span>Rs.0000.00</span>
        </div>
      </div>
      <div className="ie-profit-section">
        <h2>Profit of the day</h2>
        <div className="ie-profit-box">Rs.0000.00</div>
      </div>
    </div>
  );
};

export default IncomeExpenses; 