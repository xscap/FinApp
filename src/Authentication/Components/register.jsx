import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}\nRole: ${selected}`);
  };

  return (
    <div className="register-container">
      {/* Left: register Form */}
      <div className="register-form-section">
        <h1 className="brand-title">Fintech.io</h1>
        <div className="form-wrapper">
            <div className="main-section">
          <h2 className="register-title">Register</h2>
          <p className="register-subtitle">
            Enter your Credentials to access your account
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="role-toggle">
                <span
                  className={`role-half left ${selected === "admin" ? "active" : ""}`}
                  onClick={() => setSelected("admin")}
                >
                  Admin
                </span>
                <span
                  className={`role-half right ${selected === "client" ? "active" : ""}`}
                  onClick={() => setSelected("client")}
                >
                  Client
                </span>
              </div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>
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
                <div>
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="checkbox-text">
                Remember me for 30 days
              </label>
              </div>
              <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>

          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <div className="social-register">
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
            <span>Already have an account? </span>
            <Link to="/login" className="link-text">Login</Link>
          </div>
        </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="register-image">
        <img src="https://github.com/xscap/FinApp/blob/main/src/assets/images/register_img.png?raw=true" alt="Register" />
      </div>
    </div>
  );
}