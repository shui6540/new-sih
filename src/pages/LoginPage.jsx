import React, { useState } from "react";
import './LoginPage.css';

const LoginPage = () => {
<<<<<<< HEAD
  const [role, setRole] = useState("user"); // Default role is "user"
=======
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
>>>>>>> 992e460a0e5218c547277fbaa824972463e30799

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
=======
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
>>>>>>> 992e460a0e5218c547277fbaa824972463e30799
    e.preventDefault();
    // Handle login logic here
    console.log(`Logging in as: ${role}`);
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
<<<<<<< HEAD
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
=======
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
>>>>>>> 992e460a0e5218c547277fbaa824972463e30799
          <button type="submit" className="sign-up-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
