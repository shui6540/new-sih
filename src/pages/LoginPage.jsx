import React, { useState } from 'react';
import './LoginPage.css'; // Create a CSS file for styles

const LoginPage = () => {
  const [role, setRole] = useState('user'); // State to track User/Admin selection
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
    // Simulate an API call for user authentication
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

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update role based on selection
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Login</h2>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="rememberMe"
              id="remember-me"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <button type="submit" className="sign-up-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
