import React, { useState } from "react";
import "./customers.css";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import AddCustomerModal from "./AddCustomerModal"; // ✅ Import Modal Component

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Customers = () => {
  const [customers, setCustomers] = useState([
    { name: "Liam Harper", email: "liam.harper@example.com", status: "Active", joinDate: "2023-01-15", totalSpent: "$3,200" },
    { name: "Olivia Bennett", email: "olivia.bennett@example.com", status: "Inactive", joinDate: "2023-02-20", totalSpent: "$3,800" },
    { name: "Noah Carter", email: "noah.carter@example.com", status: "Active", joinDate: "2023-05-10", totalSpent: "$7,500" },
    { name: "Emma Davis", email: "emma.davis@example.com", status: "Pending", joinDate: "2023-01-15", totalSpent: "$2,200" },
    { name: "Jackson Ford", email: "jackson.ford@example.com", status: "Active", joinDate: "2023-02-10", totalSpent: "$6,800" },
    { name: "Ava Green", email: "ava.green@example.com", status: "Inactive", joinDate: "2023-03-08", totalSpent: "$5,500" },
    { name: "Lucas Hill", email: "lucas.hill@example.com", status: "Active", joinDate: "2023-07-22", totalSpent: "$2,900" }
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    setShowModal(false);
  };

  const barData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "Customer Status",
        data: [
          customers.filter(c => c.status === "Active").length,
          customers.filter(c => c.status === "Inactive").length,
          customers.filter(c => c.status === "Pending").length
        ],
        backgroundColor: ["#4CAF50", "#F44336", "#FF9800"]
      }
    ]
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth %",
        data: [15, 18, 14, 20, 22, 19],
        borderColor: "#4CAF50",
        fill: false,
        tension: 0.3
      }
    ]
  };

  return (
    <div className="customers-container">
      <div className="header">
        <h2>Customers</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>Add Customer</button>
      </div>

      <div className="overview">
        <div className="card">
          <h3>Total Customers</h3>
          <p>{customers.length}</p>
        </div>
        <div className="card">
          <h3>Active Customers</h3>
          <p>{customers.filter(c => c.status === "Active").length}</p>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>120</p>
        </div>
      </div>

      <div className="insights">
        <div className="chart-card">
          <h4>Customer Distribution by Status</h4>
          <Bar data={barData} />
        </div>
        <div className="chart-card">
          <h4>Customer Growth Over Time</h4>
          <Line data={lineData} />
        </div>
      </div>

      <div className="customer-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td><span className={`status ${c.status.toLowerCase()}`}>{c.status}</span></td>
                <td>{c.joinDate}</td>
                <td>{c.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <AddCustomerModal 
          onClose={() => setShowModal(false)} 
          onAdd={handleAddCustomer} 
        />
      )}
    </div>
  );
};

export default Customers;
