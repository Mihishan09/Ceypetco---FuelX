import React from 'react';
import '../styles/SummaryDailyRecords.css';

const chartData = [
  {
    date: '20/01/2025',
    color: '#7ed957',
    bars: [50, 65, 45, 25],
  },
  {
    date: '19/01/2025',
    color: '#ffd600',
    bars: [70, 65, 30, 18],
  },
];

const fuelTypes = [
  'Lanka Petrol 92 Octane',
  'Lanka Petrol 95 Octane',
  'Lanka Auto Diesel',
  'Lanka Super Diesel',
];

const SummaryDailyRecords = ({ onClose }) => {
  return (
    <div className="summary-records-container">
      <div className="summary-header-bar">
        <span>Sri Lanka Ceypetco Fuel Station</span>
        <button className="close-btn" onClick={onClose}>x</button>
      </div>
      <div className="summary-title">Daily Records</div>
      {chartData.map((data, idx) => (
        <div className="summary-chart-section" key={data.date}>
          <div className="summary-chart-row">
            <svg width="350" height="160" className="summary-bar-chart">
              {/* Y axis */}
              <line x1="40" y1="10" x2="40" y2="130" stroke="#222" strokeWidth="2" />
              {/* X axis */}
              <line x1="40" y1="130" x2="320" y2="130" stroke="#222" strokeWidth="2" />
              {/* Bars */}
              {data.bars.map((val, i) => (
                <rect
                  key={i}
                  x={60 + i * 60}
                  y={130 - val}
                  width="40"
                  height={val}
                  fill={data.color}
                  stroke="#222"
                  strokeWidth="2"
                  opacity="0.6"
                />
              ))}
              {/* Y axis label */}
              <text x="0" y="20" fontSize="16" fontWeight="bold">Liters (ℓ)</text>
              {/* X axis labels */}
              {fuelTypes.map((type, i) => (
                <text
                  key={type}
                  x={80 + i * 60}
                  y={150}
                  fontSize="12"
                  textAnchor="middle"
                  style={{ fontFamily: 'inherit' }}
                >
                  {type.split(' ').map((w, j) => (
                    <tspan x={80 + i * 60} dy={j === 0 ? 0 : 14}>{w}</tspan>
                  ))}
                </text>
              ))}
              {/* X axis label */}
              <text x="320" y="145" fontSize="13">Fuel Type</text>
            </svg>
            <div className="summary-chart-date">{data.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryDailyRecords; 