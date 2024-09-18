import React, { useState } from 'react';
import './secondPage.css'; // Ensure this file is correctly located

function App() {
  const [state, setState] = useState('');
  const [area, setArea] = useState('');

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  return (
    <div className="container">
      <h1>Help us find the best schemes for you</h1>
      <div className="progress-bar">
        <div className="progress-step active">
          <span className="step-number">1</span>
          <span className="step-text">State</span>
        </div>
        <div className="progress-step active">
          <span className="step-number">2</span>
          <span className="step-text">Area</span>
        </div>
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="state">Please select your state:</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option value="">--Select One--</option>
            {/* Add your state options here */}
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="area">Please select your area of residence:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="urban"
              name="area"
              value="Urban"
              checked={area === 'Urban'}
              onChange={handleAreaChange}
            />
            <label htmlFor="urban">Urban</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="rural"
              name="area"
              value="Rural"
              checked={area === 'Rural'}
              onChange={handleAreaChange}
            />
            <label htmlFor="rural">Rural</label>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" className="button skip">
            Skip to Results
          </button>
          <button type="button" className="button next">
            Next
          </button>
        </div>
        <div className="reset-form">
          <button type="button" className="button reset" onClick={() => {
            setState('');
            setArea('');
          }}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;