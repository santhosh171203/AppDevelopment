import React, { useState } from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Perform authentication logic here
    
  };

  // 4+

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
         
          <button type="submit" className="login-button">
            Login
          </button>
     
        </form>
        <div className="form-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;