import React, { useState } from 'react';
import './Form.css'; // Optional: Create a separate CSS file or use inline styles

const GenderForm = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender && age) {
      alert(`You selected: ${gender}, Age: ${age}`);

    } else {
      alert('Please select both gender and age.');
    }
  };

  const handleReset = () => {
    setGender('');
    setAge('');
  };

  return (
    <div className="form-container">
      <h2>Help us find the best schemes for you</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-step">
          <h3>Tell us about yourself, you are a...</h3>
          <div className="gender-selection">
            <button
              type="button"
              className={gender === 'Male' ? 'active' : ''}
              onClick={() => setGender('Male')}
            >
              Male
            </button>
            <button
              type="button"
              className={gender === 'Female' ? 'active' : ''}
              onClick={() => setGender('Female')}
            >
              Female
            </button>
            <button
              type="button"
              className={gender === 'Transgender' ? 'active' : ''}
              onClick={() => setGender('Transgender')}
            >
              Transgender
            </button>
          </div>

          <div className="age-selection">
            <h3>and your age is</h3>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            >
              <option value="">--</option>
              {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span>years</span>
          </div>

          <div className="form-buttons">
            <button type="submit" className="next-button">
              Next →
            </button>
            <button type="button" className="reset-button" onClick={handleReset}>
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenderForm;