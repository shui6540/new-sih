import React, { useState } from "react";
import './LoginPage.css';

const LoginPage = () => {
  const [role, setRole] = useState("user"); // Default role is "user"

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`Logging in as: ${role}`);
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
