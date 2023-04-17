// src/components/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const authenticate = (username, password) => {
    // Replace this function with your API call to authenticate the user.
    return username === 'user' && password === 'password';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const isAuthenticated = authenticate(username, password);

    if (isAuthenticated) {
      onLogin();
      // Set the authentication status and timestamp in localStorage
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('loginTimestamp', Date.now());
      navigate('/chat');
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>ChatBot1.1 Login</h2>
        {error && <p className="error-message">Wrong username or password</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
