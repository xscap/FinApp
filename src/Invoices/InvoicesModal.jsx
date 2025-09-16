import React, { useState } from "react";
import "./invoicemodal.css";

const InvoicesModal = ({ onClose, addInvoice }) => {
  const [form, setForm] = useState({
    number: "",
    customer: "",
    email: "",
    issued: "",
    due: "",
    status: "Outstanding",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice({ ...form, amount: parseFloat(form.amount) });
    onClose(); // ✅ Use onClose prop
  };

  return (
    <div className="invoice-modal-overlay" onClick={onClose}>
      <div
        className="invoice-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h2 className="invoice-modal-title">New Invoice</h2>
        <form
          className="invoice-modal-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="number"
            placeholder="Invoice #"
            value={form.number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="customer"
            placeholder="Customer Name"
            value={form.customer}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Customer Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="invoice-modal-row">
            <input
              type="date"
              name="issued"
              value={form.issued}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="due"
              value={form.due}
              onChange={handleChange}
              required
            />
          </div>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Outstanding">Outstanding</option>
            <option value="Paid">Paid</option>
          </select>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
          <div className="invoice-modal-actions">
            <button type="submit" className="invoice-save-btn">
              Save
            </button>
            <button
              type="button"
              className="invoice-cancel-btn"
              onClick={onClose} // ✅ Fixed Cancel button
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoicesModal;
