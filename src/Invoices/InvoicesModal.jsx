import React, { useState } from "react";
import "./invoicemodal.css";

const InvoiceModal = ({ closeModal, addInvoice }) => {
  const [formData, setFormData] = useState({
    number: "",
    customer: "",
    issued: "",
    due: "",
    status: "Outstanding",
    amount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice({ ...formData, amount: parseFloat(formData.amount) });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Invoice</h2>
        <form onSubmit={handleSubmit}>
          <label>Invoice Number</label>
          <input type="text" name="number" value={formData.number} onChange={handleChange} required />

          <label>Customer</label>
          <input type="text" name="customer" value={formData.customer} onChange={handleChange} required />

          <label>Date Issued</label>
          <input type="date" name="issued" value={formData.issued} onChange={handleChange} required />

          <label>Due Date</label>
          <input type="date" name="due" value={formData.due} onChange={handleChange} required />

          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Outstanding">Outstanding</option>
            <option value="Paid">Paid</option>
          </select>

          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

          <div className="modal-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceModal;
