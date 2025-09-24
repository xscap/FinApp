import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./forgetpw.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      return;
    }

    // Here you can integrate Firebase / API later
    setMessage("If this email is registered, you will receive a reset link.");
    setTimeout(() => navigate("/login"), 2500);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h1 className="forgot-title">Forgot Password?</h1>
        <p className="forgot-subtitle">
          Enter your registered email address, and we’ll send you a reset link.
        </p>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && <p className="forgot-message">{message}</p>}

          <button type="submit" className="forgot-btn">
            Send Reset Link
          </button>
        </form>

        <div className="back-to-login">
          <span>Remembered your password? </span>
          <Link to="/login" className="login-link">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
