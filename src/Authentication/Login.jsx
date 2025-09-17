import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Navigation hook
import "./login.css";
import LogImg from "../assets/images/login_img.png"
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Dummy credentials for testing - Later to be replaced with NestJS Authentication
  const dummyEmail = "test@example.com";
  const dummyPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyEmail && password === dummyPassword) {
      setError("");
      navigate("/dashboard"); // Navigated to Dashboard Viewer
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section: Form */}
      <div className="login-form-section">
        <h1 className="brand-title">Fintech.io</h1>
        <div className="form-wrapper">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">
            Enter your credentials to access your account
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <div className="password-wrapper" style={{ position: "relative" }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Remember Me */}
            <div className="checkbox-group">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="checkbox-text">
                Remember me for 30 days
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="error-text">{error}</p>}

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          {/* Social Login */}
          <div className="social-login">
            <a href="#" className="social-btn google-btn">
              <FcGoogle className="icon" />
              <span>Login with Google</span>
            </a>
            <a href="#" className="social-btn apple-btn">
              <FaApple className="icon" />
              <span>Login with Apple</span>
            </a>
          </div>

          {/* Signup Link */}
          <div className="signup-link">
            <span>Don't have an account? </span>
            <Link to="/register" className="link-text">Register</Link>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="login-image">
        <img src= {LogImg} alt="Login" />
      </div>
    </div>
  );
}
