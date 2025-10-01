import React, { useState } from "react";
import "./invoicemodal.css";

const InvoiceModal = ({ onClose, addInvoice }) => {
  // Hardcoded parties & items (replace with API later)
  const parties = [
    { id: 1, name: "Liam Harper" },
    { id: 2, name: "Olivia Bennett" },
    { id: 3, name: "Sophia Wilson" }
  ];

  const itemsList = [
    { id: 101, name: "Laptop", price: 1000, taxRate: 18 },
    { id: 102, name: "Keyboard", price: 50, taxRate: 12 },
    { id: 103, name: "Mouse", price: 30, taxRate: 12 }
  ];

  // State
  const [party, setParty] = useState("");
  const [items, setItems] = useState([]);
  const [issuedDate, setIssuedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Add item to invoice
  const handleAddItem = (item) => {
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setItems([...items, { ...item, qty: 1 }]);
    }
  };

  // Update quantity
  const handleQtyChange = (id, qty) => {
    setItems(items.map((i) => (i.id === id ? { ...i, qty: Number(qty) } : i)));
  };

  // Calculations
  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const tax = items.reduce((acc, i) => acc + (i.price * i.qty * i.taxRate) / 100, 0);
  const netTotal = subtotal + tax;

  // Save invoice
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      number: "INV-" + Math.floor(Math.random() * 1000),
      customer: parties.find((p) => p.id === Number(party))?.name || "Unknown",
      email: "test@example.com",
      status: "Active",
      issued: issuedDate,
      due: dueDate,
      amount: netTotal
    };
    addInvoice(newInvoice);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Invoice</h2>
        <form onSubmit={handleSubmit}>
          {/* Party Selection */}
          <label>Party</label>
          <select value={party} onChange={(e) => setParty(e.target.value)} required>
            <option value="">Select Party</option>
            {parties.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          {/* Dates */}
          <label>Issued Date</label>
          <input type="date" value={issuedDate} onChange={(e) => setIssuedDate(e.target.value)} required />

          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

          {/* Items Section */}
          <label>Add Items</label>
          <div className="items-list">
            {itemsList.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleAddItem(item)}
              >
                {item.name} (${item.price})
              </button>
            ))}
          </div>

          {/* Selected Items */}
          {items.length > 0 && (
            <div className="selected-items">
              <h4>Selected Items</h4>
              {items.map((i) => (
                <div key={i.id} className="selected-item">
                  <span>{i.name}</span>
                  <input
                    type="number"
                    min="1"
                    value={i.qty}
                    onChange={(e) => handleQtyChange(i.id, e.target.value)}
                  />
                  <span>${i.price} x {i.qty}</span>
                </div>
              ))}
            </div>
          )}

          {/* Totals */}
          <div className="totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Net Total: ${netTotal.toFixed(2)}</h3>
          </div>

          {/* Buttons */}
          <div className="modal-actions">
            <button type="submit" className="save-btn">Save Invoice</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceModal;
