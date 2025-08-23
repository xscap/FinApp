import "./payments.css";
import { useEffect, useState } from "react";
import cardImg from "../assets/images/card-placeholder.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Payments() {
  const [payments, setPayments] = useState([]);
  const [debitCards, setDebitCards] = useState([]);

  useEffect(() => {
    fetch("/payments.json")
      .then((res) => res.json())
      .then((data) => setPayments(data));

    fetch("/debitcards.json")
      .then((res) => res.json())
      .then((data) => setDebitCards(data));
  }, []);

  const lineChartData = {
    labels: ["March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "Payments",
        data: [1200, 1900, 3000, 2500, 3200, 2800],
        fill: false,
        borderColor: "#334155",
        backgroundColor: "#334155",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="app-container">
        <div className="header-row">
          <div>
            <h1 className="main-title">Payments</h1>
          </div>
          <div>
            <p className="btn-action">Make Payment</p>
          </div>
        </div>
        <div className="summary-cards">
          <div className="summary-card">
            <p className="summary-label">Total Payments</p>
            <p className="summary-value">$12500</p>
          </div>
          <div className="summary-card">
            <p className="summary-label">Outstanding Amount</p>
            <p className="summary-value">$3,200</p>
          </div>
          <div className="summary-card">
            <p className="summary-label">Next Due Date</p>
            <p className="summary-value">July 15, 2024</p>
          </div>
        </div>

        <h2 className="section-title">More Details</h2>
        <div className="details-cards">
          <div className="details-card">
            <p className="details-label">Purchase Order</p>
            <p className="details-value">465</p>
          </div>
          <div className="details-card">
            <p className="details-label">Purchase return</p>
            <p className="details-value">235</p>
          </div>
          <div className="details-card">
            <p className="details-label">Sales Order</p>
            <p className="details-value">65</p>
          </div>
          <div className="details-card">
            <p className="details-label">Sales return</p>
            <p className="details-value">34</p>
          </div>
        </div>

        <h2 className="section-title">Payments Overview</h2>
        <div className="table-container">
          <table className="payments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={idx}>
                  <td>{payment.date}</td>
                  <td>{payment.description}</td>
                  <td>{payment.amount}</td>
                  <td>
                    <span className={`status-badge ${payment.status}`}>{payment.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="chart-section">
          <p className="chart-label">Payments trends</p>
          <p className="chart-value">$12500</p>
          <p className="chart-desc">Last 12 months</p>
          <div>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
        <div>
          <h2 className="section-title">Saved Payment Methods</h2>
          <div className="cards-list">
            {debitCards.map((card, idx) => (
              <div key={idx} className="card-item">
                <img
                  src={card.image || cardImg}
                  alt="Card"
                  className="card-img"
                />
                <p className="card-number">{card.number}</p>
                <p className="card-expiry">Exp: {card.expiry}</p>
              </div>
            ))}
          </div>
          <div className="add-method-row">
            <p className="btn-action add-method-btn">Add Payment method</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;
