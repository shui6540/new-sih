import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    // Basic validation
    if (!companyName || !contactNumber || !email || !confirmEmail || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email and password confirmation checks
    if (email !== confirmEmail) {
      alert('Emails do not match.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Placeholder for sign-up logic, such as an API call
    // Add actual sign-up logic here

    // Redirect to dashboard (or another page) after sign-up
    navigate('/dashboard'); // Replace with your actual dashboard route
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up to Use Our Calculator</h2>

        {/* Company Name */}
        <div className="inputField">
          <label htmlFor="companyName">Username</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your user name"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="inputField">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Email */}
        <div className="inputField">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

       

        {/* Password */}
        <div className="inputField">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="inputField">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        {/* Sign Up Button */}
        <button type="submit" className="signUpButton">Sign Up</button>

        {/* Link to login */}
        <p className="loginLink">
          Already registered? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
