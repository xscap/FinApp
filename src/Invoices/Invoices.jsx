import React, { useState } from "react";
import "./invoices.css";
import InvoicesModal from "./InvoicesModal";

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    { number: "INV-2023-001", customer: "Tech Solutions Inc.", issued: "2023-01-15", due: "2023-02-15", status: "Paid", amount: 1500 },
    { number: "INV-2023-002", customer: "Global Marketing Ltd.", issued: "2023-02-20", due: "2023-03-20", status: "Outstanding", amount: 2200 },
    { number: "INV-2023-003", customer: "Creative Designs Co.", issued: "2023-03-25", due: "2023-04-25", status: "Paid", amount: 800 },
    { number: "INV-2023-004", customer: "Innovative Systems LLC", issued: "2023-04-30", due: "2023-05-30", status: "Outstanding", amount: 3500 },
    { number: "INV-2023-005", customer: "Dynamic Solutions Group", issued: "2023-05-05", due: "2023-06-05", status: "Paid", amount: 1200 },
    { number: "INV-2023-006", customer: "Strategic Ventures Corp.", issued: "2023-06-10", due: "2023-07-10", status: "Outstanding", amount: 4800 },
    { number: "INV-2023-007", customer: "Advanced Technologies Ltd.", issued: "2023-07-15", due: "2023-08-15", status: "Paid", amount: 2500 }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleAddInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
    setSuccessMsg("Your Invoice is successfully created.");
    setTimeout(() => setSuccessMsg(""), 3000); // Hide after 3s
  };

  return (
    <div className="invoice-container">
        <div className="invoice-header">
      <h1>Invoices</h1>
      <button className="create-btn" onClick={() => setShowModal(true)}>
        Create Invoice
      </button>
      </div>

      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Overview Cards */}
      <div className="overview">
        <div className="card">
          <p>Total Invoices</p>
          <h2>{invoices.length}</h2>
        </div>
        <div className="card">
          <p>Outstanding Invoices</p>
          <h2>{invoices.filter(i => i.status === "Outstanding").length}</h2>
        </div>
        <div className="card">
          <p>Paid Invoices</p>
          <h2>{invoices.filter(i => i.status === "Paid").length}</h2>
        </div>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Customer</th>
            <th>Date Issued</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, index) => (
            <tr key={index}>
              <td>{inv.number}</td>
              <td>{inv.customer}</td>
              <td>{inv.issued}</td>
              <td>{inv.due}</td>
              <td>
                <span className={inv.status === "Paid" ? "status paid" : "status outstanding"}>
                  {inv.status}
                </span>
              </td>
              <td>${inv.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <InvoicesModal
          closeModal={() => setShowModal(false)}
          addInvoice={handleAddInvoice}
        />
      )}
    </div>
  );
};

export default Invoices;
