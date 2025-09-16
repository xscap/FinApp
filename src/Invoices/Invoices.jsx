import React, { useState } from "react";
import "./invoices.css";
import InvoiceModal from "./InvoicesModal";

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    {
      number: "INV-001",
      customer: "Liam Harper",
      email: "liam.harper@example.com",
      status: "Active",
      issued: "2023-01-15",
      due: "2023-02-15",
      amount: 3200
    },
    {
      number: "INV-002",
      customer: "Olivia Bennett",
      email: "olivia.bennett@example.com",
      status: "Active",
      issued: "2023-01-18",
      due: "2023-02-18",
      amount: 2100
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <div className="invoices-container">
      {/* Header */}
      <div className="invoice-header">
        <h1>Invoices</h1>
        <button className="create-btn" onClick={() => setShowModal(true)}>
          + Create Invoice
        </button>
      </div>

      {/* Overview Section */}
      <div className="overview">
        <div className="card">
          <h2>Paid Invoices</h2>
          <p>4</p>
        </div>
        <div className="card">
          <h2>Outstanding</h2>
          <p>2</p>
        </div>
        <div className="card">
          <h2>Total Revenue</h2>
          <p>$12,000</p>
        </div>
      </div>

      {/* Table for Desktop */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Status</th>
            <th>Issued</th>
            <th>Due</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.number}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.email}</td>
              <td>
                <span
                  className={`status ${
                    invoice.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td>{invoice.issued}</td>
              <td>{invoice.due}</td>
              <td>${invoice.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cards for Mobile */}
      <div className="invoice-list">
        {invoices.map((invoice, index) => (
          <div key={index} className="invoice-card">
            <h3>{invoice.number}</h3>
            <p>{invoice.customer}</p>
            <p>{invoice.email}</p>
            <p>
              {invoice.issued} → {invoice.due}
            </p>
            <span
              className={`status ${
                invoice.status === "Active" ? "active" : "inactive"
              }`}
            >
              {invoice.status}
            </span>
            <p>${invoice.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <InvoiceModal
          onClose={() => setShowModal(false)}
          addInvoice={addInvoice}
        />
      )}
    </div>
  );
};

export default Invoices;
