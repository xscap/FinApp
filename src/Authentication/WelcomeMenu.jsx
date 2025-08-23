// Welcome.jsx with typing effect for title and loading animation on button redirect

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcomemenu.css';

const WelcomeMenu= () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState('');

  const handleRedirect = (path) => {
    setLoading(true);
    setRedirectTarget(path);
    setTimeout(() => {
      navigate(path);
    }, 1500); // 1.5 seconds loading animation before redirect
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome To FinTech.io</h1>

      {loading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Redirecting to {redirectTarget === '/login' ? 'Login' : 'Register'}...</p>
        </div>
      ) : (
        <div className="button-group">
          <button
            className="animated-button login-button"
            onClick={() => handleRedirect('/login')}
          >
            Login
          </button>
          <button
            className="animated-button register-button"
            onClick={() => handleRedirect('/register')}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeMenu;
