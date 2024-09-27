import React, { useState } from 'react';
import './LoginPage.css'; // Create a CSS file for styles

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    contactNumber: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const authenticateUser = async (data) => {
    // Implement actual authentication logic (replace with actual API calls)
    // For now, we can simulate an API call that checks for existing users.
    
    // Example of a fake user database (to be replaced with actual logic)
    const users = [
      { username: 'user1', password: 'password123' },
      { username: 'admin1', password: 'adminpass123' },
    ];

    const user = users.find(
      (u) => u.username === data.username && u.password === data.password
    );

    return user !== undefined;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return;
    }

    // Authenticate user
    const isAuthenticated = await authenticateUser(formData);
    if (isAuthenticated) {
      // Success: redirect or show success message
      alert(`Welcome ${formData.username}!`);
      // You can implement further redirection or state updates here
    } else {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required={!isAdmin} // Make contact number optional for admin
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required={!isAdmin} // Make email optional for admin
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required={isAdmin} // Make confirm password required for admin
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit" className="sign-up-button">Log In</button>
      </form>
      <p>
        Switch to {isAdmin ? 'User Login' : 'Admin Login'}{' '}
        <a href="#" onClick={() => setIsAdmin(!isAdmin)}>here</a>
      </p>
    </div>
  );
};

export default LoginPage;
