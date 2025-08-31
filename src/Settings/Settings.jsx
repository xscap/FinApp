import React, { useRef, useState, useEffect } from "react";
import './settings.css';
import ProfilePhoto from '../assets/images/Profile.jpg';
import PaymentPicture from '../assets/images/Payment.jpg';
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const navigate = useNavigate();

  // User info states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(ProfilePhoto);
  const fileInputRef = useRef();

  // Button action states
  const [plan, setPlan] = useState("Premium");
  const [renewDate] = useState("July 16, 2024");
  const [message, setMessage] = useState("");

  // Load saved profile image from localStorage (if exists)
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle profile image upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0]; // ✅ fix: pick first file
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
        localStorage.setItem("profileImage", event.target.result); // ✅ persist image
        setMessage("Profile picture updated!");
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please select a valid image file.");
    }
  };

  // Trigger hidden file input on button click
  const handleChangePictureClick = () => {
    fileInputRef.current.click();
  };

  // Handle save changes
  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!name || !username) {
      setMessage("Name and Username cannot be empty.");
    } else {
      setMessage("Profile changes saved!");
      // Add save logic (API request) here if backend is connected
    }
  };

  // Simulate plan upgrade action
  const handleUpgradePlan = () => {
    setPlan("Enterprise");
    setMessage("Plan upgraded to Enterprise!");
  };

  // Payment methods interaction
  const handleManagePayment = () => {
    setMessage("Redirecting to payment management...");
    // Add navigation logic here
  };

  // Simulate logout
  const handleLogout = () => {
    setMessage("Logged out.");
    // Add logout/auth logic here
    navigate("/login");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>

      <section className="profile-section">
        <h2 className="section-title">Profile Settings</h2>
        <div className="profile-content">
          <div className="profile-picture-box">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-picture"
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
          <div className="profile-details">
            <div className="profile-picture-info">
              <h3 className="profile-subtitle">Profile Picture</h3>
              <p className="profile-instructions">
                Upload a new profile picture or change your current one.
              </p>
              <button
                className="change-picture-btn"
                onClick={handleChangePictureClick}
                type="button"
              >
                Change Picture
              </button>
            </div>
          </div>
        </div>
        <form className="profile-form" onSubmit={handleSaveChanges}>
          <input
            type="text"
            className="settings-input"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="settings-input"
            placeholder="Username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <button className="save-changes-btn" type="submit">
            Save Changes
          </button>
        </form>
        {message && <div className="message-info">{message}</div>}
      </section>

      <section className="billing-section">
        <h2 className="section-title">Billing &amp; Subscription</h2>
        <div className="billing-content">
          <div className="plan-details">
            <p className="current-plan">
              <strong>Current Plan:</strong> {plan}
            </p>
            <p className="renew-date">Renews on {renewDate}</p>
            <button
              className="upgrade-plan-btn"
              onClick={handleUpgradePlan}
              type="button"
            >
              Upgrade Plan
            </button>
            <button
              className="manage-payment-btn"
              onClick={handleManagePayment}
              type="button"
            >
              Manage Payment Methods
            </button>
            <button
              className="logout-btn"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          </div>
          <div className="card-image-box">
            <img
              src={PaymentPicture}
              alt="Payment Card"
              className="card-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
