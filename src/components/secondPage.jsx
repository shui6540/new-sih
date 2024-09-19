import React, { useState } from "react";
import './secondPage.css'; // Assuming the CSS is in App.css file

const Form = () => {
  const [state, setState] = useState("");
  const [residence, setResidence] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleResidenceChange = (e) => {
    setResidence(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state || !residence) {
      alert("Please select all options.");
      return;
    }
    console.log("State:", state);
    console.log("Residence:", residence);
    // Proceed to the next step or display results
  };

  return (
    <div className="form-container">
      <div className="progress-bar">
        <span className="completed"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="state">Please select your state</label>
        <select id="state" value={state} onChange={handleStateChange}>
          <option value="">--Select One--</option>
          <option value="State1">State 1</option>
          <option value="State2">State 2</option>
          <option value="State3">State 3</option>
          {/* Add more states as needed */}
        </select>

        <div className="residence-selection">
          <label>*Please select your area of residence</label>
          <div className="residence-options">
            <input
              type="radio"
              id="urban"
              name="residence"
              value="Urban"
              checked={residence === "Urban"}
              onChange={handleResidenceChange}
            />
            <label htmlFor="urban">Urban</label>

            <input
              type="radio"
              id="rural"
              name="residence"
              value="Rural"
              checked={residence === "Rural"}
              onChange={handleResidenceChange}
            />
            <label htmlFor="rural">Rural</label>
          </div>
        </div>

        <div className="buttons">
          <button type="button" className="skip-btn" onClick={() => console.log("Skipping to Results")}>
            Skip to Results
          </button>
          <button type="submit" className="next-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
