import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import { FaHome, FaFileInvoice, FaDollarSign, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Invoices", icon: <FaFileInvoice />, path: "/invoices" },
    { name: "Payments", icon: <FaDollarSign />, path: "/payments" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
    { name: "Reports", icon: <FaChartBar />, path: "/reports" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">FinancePro</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item${location.pathname === item.path ? " active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;