import React, { useState } from 'react';
import '../assets/css/Login1.css'
import { Link } from 'react-router-dom';
const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here, e.g., send a request to your backend.
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><Link to="/side">Login</Link></button>
      </form>
    </div>
  );
};

export default Login1;