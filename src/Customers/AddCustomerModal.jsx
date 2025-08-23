import React, { useState } from "react";
import "./addcustomermodal.css";

const AddCustomerModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
    joinDate: "",
    totalSpent: ""
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    onAdd(formData);
    setFormData({ name: "", email: "", status: "Active", joinDate: "", totalSpent: "" });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Customer</h3>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
        <input type="date" value={formData.joinDate} onChange={(e) => setFormData({...formData, joinDate: e.target.value})} />
        <input type="text" placeholder="Total Spent" value={formData.totalSpent} onChange={(e) => setFormData({...formData, totalSpent: e.target.value})} />
        
        <div className="modal-actions">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
