import React from "react";
import "./dbcontent.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardCntnt = () => {
  // Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 700, 500, 800, 600, 900, 450],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [300, 400, 350, 380, 390, 420, 410],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      {/* Top Stats */}
      <div className="top-cards">
        <div className="card">
          <p>Total Revenue</p>
          <h3>$2,345,678</h3>
        </div>
        <div className="card">
          <p>Outstanding Balance</p>
          <h3>$123,456</h3>
        </div>
        <div className="card">
          <p>Avg. Payment Time</p>
          <h3>28 days</h3>
        </div>
      </div>

      {/* Revenue Overview */}
      <h3 className="section-title">Revenue Overview</h3>
      <div className="overview">
        {/* Revenue Trend */}
        <div className="overview-card">
          <h4>Revenue Trend (Last 12 Months)</h4>
          <h2>$2,345,678</h2>
          <p className="positive">Last 12 Months +12%</p>
          <Line data={lineData} />
        </div>

        {/* Monthly Revenue Comparison */}
        <div className="overview-card">
          <h4>Monthly Revenue Comparison</h4>
          <h2>$195,473</h2>
          <p className="negative">Current Year -5%</p>
          <Bar data={barData} />
        </div>

        {/* Revenue by Product Category */}
        <div className="overview-card">
          <h4>Revenue by Product Category</h4>
          <h2>$876,543</h2>
          <p className="positive">Current Year +8%</p>
          <ul className="categories">
            <li>Category A ▓▓▓▓▓▓</li>
            <li>Category B ▓▓▓▓▓</li>
            <li>Category C ▓▓▓▓</li>
            <li>Category D ▓▓</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardCntnt;
