import React, { useState } from "react";
import "./generatepayment.css"; // Create this CSS file for styling

const GeneratePayment = ({ onClose, addPayment }) => {
  const [form, setForm] = useState({
    customer: "",
    amount: "",
    method: "Card",
    date: "",
    status: "Completed",
    note: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPayment({ ...form, amount: parseFloat(form.amount) });
    onClose();
  };

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div
        className="payment-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h2 className="payment-modal-title">New Payment</h2>
        <form
          className="payment-modal-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="customer"
            placeholder="Customer Name"
            value={form.customer}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
          <select name="method" value={form.method} onChange={handleChange}>
            <option value="Card">Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
          <input
            type="text"
            name="note"
            placeholder="Note (optional)"
            value={form.note}
            onChange={handleChange}
          />
          <div className="payment-modal-actions">
            <button type="submit" className="payment-save-btn">
              Save
            </button>
            <button
              type="button"
              className="payment-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePayment;