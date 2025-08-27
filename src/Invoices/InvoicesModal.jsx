import React, { useState } from "react";
import "./invoicemodal.css";

const InvoicesModal = ({ closeModal, addInvoice }) => {
  const [form, setForm] = useState({
    number: "",
    customer: "",
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
    closeModal();
  };

  return (
    <div className="imodal-overlay" onClick={closeModal}>
      <div className="imodal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="imodal-close" onClick={closeModal} aria-label="Close">&times;</button>
        <h2 className="imodal-title">New Invoice</h2>
        <form className="imodal-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="imodal-field">
            <label htmlFor="number">Invoice #</label>
            <input
              id="number"
              name="number"
              type="text"
              value={form.number}
              onChange={handleChange}
              required
              placeholder="INV-001"
            />
          </div>
          <div className="imodal-field">
            <label htmlFor="customer">Customer</label>
            <input
              id="customer"
              name="customer"
              type="text"
              value={form.customer}
              onChange={handleChange}
              required
              placeholder="Customer Name"
            />
          </div>
          <div className="imodal-row">
            <div className="imodal-field">
              <label htmlFor="issued">Issued</label>
              <input
                id="issued"
                name="issued"
                type="date"
                value={form.issued}
                onChange={handleChange}
                required
              />
            </div>
            <div className="imodal-field">
              <label htmlFor="due">Due</label>
              <input
                id="due"
                name="due"
                type="date"
                value={form.due}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="imodal-row">
            <div className="imodal-field">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Outstanding">Outstanding</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <div className="imodal-field">
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="0"
                step="0.01"
                value={form.amount}
                onChange={handleChange}
                required
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="imodal-actions">
            <button type="submit" className="imodal-save">Save</button>
            <button type="button" className="imodal-cancel" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoicesModal;