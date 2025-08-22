import React from "react";
import Navbar from "../Dashboard/Navigation/Navbar";
import Sidebar from "../Dashboard/Navigation/Sidebar";
import "./navlayout.css";

const NavLayout = ({ children }) => {
  return (
    <div className="layout">
      {/* Top Navbar */}
      <Navbar />

      <div className="layout-body">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default NavLayout;
