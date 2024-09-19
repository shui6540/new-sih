import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Ensure your CSS file is correctly imported

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(null);
  const [employmentStatus, setEmploymentStatus] = useState('');
  
  const navigate = useNavigate();

  // Handle Next and Back navigation
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  // Handle Form Reset
  const handleReset = () => {
    setGender('');
    setAge('');
    setState('');
    setArea('');
    setCategory('');
    setIsDifferentlyAbled(null);
    setEmploymentStatus('');
    setStep(1);
  };

  // Handle Final Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submission: Gender: ${gender}, Age: ${age}, State: ${state}, Area: ${area}, Category: ${category}, Differently Abled: ${isDifferentlyAbled}, Employment Status: ${employmentStatus}`);
    // Form submission logic goes here
    navigate('/thank-you'); // Redirect to a thank you page or similar
  };

  // Employment form submission
  const handleEmploymentSubmit = (e) => {
    e.preventDefault();
    if (employmentStatus) {
      handleNext();
    } else {
      alert('Please select your employment status.');
    }
  };

  // Scroll to the top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1>Help us find the best schemes for you</h1>
      <div className="progress-bar">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`progress-step ${step > i ? 'active' : ''}`}>
            <span className="check-mark">{step > i ? '✔' : i + 1}</span>
          </div>
        ))}
      </div>

      <form onSubmit={step === 5 ? handleSubmit : (e) => e.preventDefault()}>
        {step === 1 && (
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
              <select value={age} onChange={(e) => setAge(e.target.value)} required>
                <option value="">--</option>
                {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <span>years</span>
            </div>
            <div className="form-buttons first-button">
              <button type="button" className="next-button" onClick={handleNext}>Next →</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h3>Please select your state and area of residence</h3>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">--Select One--</option>
                <option value="">--Select One--</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                {/* Add more state options */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="area">Area:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  id="urban"
                  name="area"
                  value="Urban"
                  checked={area === 'Urban'}
                  onChange={(e) => setArea(e.target.value)}
                />
                <label htmlFor="urban">Urban</label>
                <input
                  type="radio"
                  id="rural"
                  name="area"
                  value="Rural"
                  checked={area === 'Rural'}
                  onChange={(e) => setArea(e.target.value)}
                />
                <label htmlFor="rural">Rural</label>
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>← Back</button>
              <button type="button" className="next-button" onClick={handleNext}>Next →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>What is your current employment status?</h2>
            <div className="employment-status-selection">
              <button
                type="button"
                className={employmentStatus === 'Employed' ? 'active' : ''}
                onClick={() => setEmploymentStatus('Employed')}
              >
                Employed
              </button>
             
              <button
                type="button"
                className={employmentStatus === 'Unemployed' ? 'active' : ''}
                onClick={() => setEmploymentStatus('Unemployed')}
              >
                Unemployed
              </button>
           
              <button
                type="button"
                className={employmentStatus === 'Self-Employed/ Entrepreneur' ? 'active' : ''}
                onClick={() => setEmploymentStatus('Self-Employed/ Entrepreneur')}
              >
                Self-Employed/ Entrepreneur
              </button>
            </div>

            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>← Back</button>
              <button type="button" className="next-button" onClick={handleEmploymentSubmit}>Next →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h>You belong to...</h>
            <div className="category-options">
              <button className={category === 'General' ? 'active' : ''} onClick={() => setCategory('General')}>
                General
              </button>
              <button
                className={category === 'OBC' ? 'active' : ''}
                onClick={() => setCategory('OBC')}
              >
                Other Backward Class (OBC)
              </button>
              <button
                className={category === 'PVTG' ? 'active' : ''}
                onClick={() => setCategory('PVTG')}
              >
                Particularly Vulnerable Tribal Group (PVTG)
              </button>
              <button
                className={category === 'SC' ? 'active' : ''}
                onClick={() => setCategory('SC')}
              >
                Scheduled Caste (SC)
              </button>
              <button
                className={category === 'ST' ? 'active' : ''}
                onClick={() => setCategory('ST')}
              >
                Scheduled Tribe (ST)
              </button>
            </div>
            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>← Back</button>
              <button type="button" className="next-button" onClick={handleNext}>Next →</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="form-step">
            <h3>Are you differently abled?</h3>
            <div className="options">
              <button className={isDifferentlyAbled === true ? 'active' : ''} onClick={() => setIsDifferentlyAbled(true)}>
                Yes
              </button>
              <button className={isDifferentlyAbled === false ? 'active' : ''} onClick={() => setIsDifferentlyAbled(false)}>
                No
              </button>
            </div>
            <div className="form-buttons">
              <button type="button" className="previous-button" onClick={handleBack}>← Back</button>
              <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        )}
      </form>

      <div className="reset-section">
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default MultiStepForm;
