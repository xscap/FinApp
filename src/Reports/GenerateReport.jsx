import React from "react";
import "./generatereport.css";

const GenerateReport = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Report</h2>
        <input type="text" placeholder="Report Name" />
        <input type="date" />
        <select>
          <option>Status</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>In Review</option>
        </select>
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button className="submit-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
