import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      {/* Left: Login Form */}
      <div className="login-form-section">
        <h1 className="brand-title">Fintech.io</h1>
        <div className="form-wrapper">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">
            Enter your Credentials to access your account
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <div className="password-wrapper">
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

            <div className="checkbox-group">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="checkbox-text">
                Remember me for 30 days
              </label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <div className="social-login">
            <a href="" className="social-btn google-btn">
              <FcGoogle className="icon" />
              <span>Login with Google</span>
            </a>
            <a href="" className="social-btn apple-btn">
              <FaApple className="icon" />
              <span>Login with Apple</span>
            </a>
          </div>

          <div className="signup-link">
            <span>Don't have an account? </span>
            <a href="/register">Sign up</a>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="login-image">
        <img src="src/assets/images/login_img.png" alt="Login" />
      </div>
    </div>
  );
}
