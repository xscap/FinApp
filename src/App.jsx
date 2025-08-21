import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Reports from "./Reports/Reports";
import styles from "./App.module.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Header onMenuClick={handleSidebarToggle} />
        <div className={styles.body}>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <Routes>
            <Route path="/" element={<Dashboard sidebarOpen={sidebarOpen} />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
        {/* Overlay for mobile/blur effect */}
        {sidebarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;





