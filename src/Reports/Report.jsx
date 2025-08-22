import React, { useState } from "react";
import "./report.css";
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
import GenerateReport from "./GenerateReport";
import PdfPreview from "./PdfPreview";
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

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const handlePdfPreview = (pdfPath) => {
    setSelectedPdf(pdfPath);
    setPdfModalOpen(true);
  };

  // Chart Data
  const monthlyTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Reports",
        data: [12, 19, 14, 20, 16, 12],
        borderColor: "#000",
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    ],
  };

  const statusDistributionData = {
    labels: ["Pending", "Completed", "In Review"],
    datasets: [
      {
        label: "Status",
        data: [10, 12, 11],
        backgroundColor: ["#f1c40f", "#2ecc71", "#3498db"],
      },
    ],
  };

  const topCategoriesData = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "Reports",
        data: [8, 3, 9],
        backgroundColor: ["#e74c3c", "#9b59b6", "#1abc9c"],
      },
    ],
  };

  return (
    <div className="reports-page">
      <div className="reports-header">
        <h1>Reports</h1>
        <button
          className="generate-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Generate Report
        </button>
      </div>

      {/* Top Stats */}
      <div className="stats-cards">
        <div className="card">Total Reports <p>120</p></div>
        <div className="card">Reports This Month <p>25</p></div>
        <div className="card">Pending Reports <p>10</p></div>
      </div>

      {/* Data Visualizations */}
      <h2>Data Visualizations</h2>
      <div className="charts-section">
        <div className="chart-card">
          <h3>Monthly Report Trends</h3>
          <Line data={monthlyTrendsData} />
        </div>
        <div className="chart-card">
          <h3>Report Status Distribution</h3>
          <Bar data={statusDistributionData} />
        </div>
        <div className="chart-card">
          <h3>Top Report Categories</h3>
          <Bar data={topCategoriesData} options={{ indexAxis: "y" }} />
        </div>
      </div>

      {/* Recent Reports */}
      <h2>Recent Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quarterly Sales Report</td>
            <td>2024-07-15</td>
            <td><span className="status completed">Completed</span></td>
            <td><a href="#">Download</a></td>
          </tr>
          <tr>
            <td>Monthly Marketing Report</td>
            <td>2024-07-01</td>
            <td><span className="status completed">Completed</span></td>
            <td><a href="#">Download</a></td>
          </tr>
          <tr>
            <td>Annual Financial Report</td>
            <td>2024-06-15</td>
            <td><span className="status completed">Completed</span></td>
            <td><a href="#">Download</a></td>
          </tr>
          <tr>
            <td>Pending Customer Feedback Report</td>
            <td>2024-05-20</td>
            <td><span className="status pending">Pending</span></td>
            <td><a href="#">Download</a></td>
          </tr>
          <tr>
            <td>Product Performance Report</td>
            <td>2024-04-10</td>
            <td><span className="status completed">Completed</span></td>
            <td><a href="#">Download</a></td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && (
        <GenerateReport onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Report;
