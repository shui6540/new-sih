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

  const handleSubmit = (e) => {
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
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-up-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
