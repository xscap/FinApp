import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import { FaHome, FaFileInvoice, FaDollarSign, FaUsers, FaChartBar, FaBars, FaTimes, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Invoices", icon: <FaFileInvoice />, path: "/invoices" },
    { name: "Payments", icon: <FaDollarSign />, path: "/payments" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
    { name: "Reports", icon: <FaChartBar />, path: "/reports" },
    { name: "Settings", icon: <FaCog />, path: "/settings" }
  ];

  const mainMenuItems = menuItems.filter(item => item.name !== "Settings");
  const settingsItem = menuItems.find(item => item.name === "Settings");

  // Sidebar content
  const sidebarContent = (
    <div className={`sidebar${open ? " open" : ""}`}>
      <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close sidebar">
        <FaTimes />
      </button>
      <h2 className="sidebar-logo">FinancePro</h2>
      <ul className="sidebar-menu">
        {mainMenuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item${location.pathname === item.path ? " active" : ""}`}
            onClick={() => {
              navigate(item.path);
              setOpen(false); // close sidebar on mobile after navigation
            }}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-settings">
        <li
          className={`sidebar-item${location.pathname === settingsItem.path ? " active" : ""}`}
          onClick={() => {
            navigate(settingsItem.path);
            setOpen(false);
          }}
        >
          <span className="icon">{settingsItem.icon}</span>
          <span className="text">{settingsItem.name}</span>
        </li>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <button className="sidebar-hamburger" onClick={() => setOpen(true)} aria-label="Open sidebar">
        <FaBars />
      </button>
      {/* Overlay for mobile */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
      {sidebarContent}
    </>
  );
};

export default Sidebar;