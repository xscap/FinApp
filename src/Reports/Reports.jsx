import React, { useEffect, useState } from "react";
import styles from "./Reports.module.css";

const statusOptions = ["Pending", "Initiated", "Completed"];

const LOCAL_KEY = "recentReports";

const Reports = ({ sidebarOpen }) => {
  const [summary, setSummary] = useState({
    total: null,
    month: null,
    pending: null,
  });
  const [visuals, setVisuals] = useState({
    trends: [],
    status: [],
    categories: [],
  });
  const [recentReports, setRecentReports] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    status: "",
    actions: "",
  });
  const [formError, setFormError] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_KEY);
    if (localData) {
      setRecentReports(JSON.parse(localData));
    }
    // If backend is connected, fetch from API instead
    // fetch('/api/reports').then(...)
  }, []);

  // Save to localStorage whenever recentReports changes
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(recentReports));
  }, [recentReports]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.status || !form.actions) {
      setFormError("All fields are required.");
      return;
    }
    const newReport = {
      id: Date.now(),
      name: form.name,
      date: form.date,
      status: form.status,
      actions: form.actions,
    };
    setRecentReports([...recentReports, newReport]);
    setShowForm(false);
    setForm({ name: "", date: "", status: "", actions: "" });
    setFormError("");
  };

  return (
    <div
      className={styles.reportsMain}
      style={{ marginLeft: sidebarOpen ? "230px" : "0" }}
    >
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Reports</h1>
          <button
            className={styles.generateBtn}
            onClick={() => setShowForm(true)}
          >
            Generate Report
          </button>
        </div>
        <div className={styles.summaryRow}>
          <div className={styles.summaryCard}>
            <span>Total Reports</span>
            <h2>{summary.total ?? "--"}</h2>
          </div>
          <div className={styles.summaryCard}>
            <span>Reports This Month</span>
            <h2>{summary.month ?? "--"}</h2>
          </div>
          <div className={styles.summaryCard}>
            <span>Pending Reports</span>
            <h2>{summary.pending ?? "--"}</h2>
          </div>
        </div>
        <h3 className={styles.sectionTitle}>Data Visualizations</h3>
        <div className={styles.visualsRow}>
          <div className={styles.visualCard}>
            <div className={styles.visualTitle}>Monthly Report Trends</div>
            <div className={styles.visualValue}>+15%</div>
            <div className={styles.visualSub}>
              Last 6 Months{" "}
              <span className={styles.green}>+15%</span>
            </div>
            {/* Placeholder for line chart */}
            <div className={styles.chart}>
              <svg width="100%" height="60">
                <polyline
                  fill="none"
                  stroke="#22223b"
                  strokeWidth="3"
                  points="0,40 20,30 40,35 60,25 80,40 100,30 120,40"
                />
              </svg>
              <div className={styles.months}>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.visualCard}>
            <div className={styles.visualTitle}>Report Status Distribution</div>
            <div className={styles.visualValue}>25%</div>
            <div className={styles.visualSub}>
              Current Month{" "}
              <span className={styles.green}>+5%</span>
            </div>
            {/* Placeholder for bar chart */}
            <div className={styles.barChart}>
              {["Pending", "Completed", "Initiative"].map((status, i) => (
                <div key={status} className={styles.barGroup}>
                  <div
                    className={styles.bar}
                    style={{ height: `${40 + i * 20}px` }}
                  ></div>
                  <span className={styles.barLabel}>{status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.visualCard}>
            <div className={styles.visualTitle}>Top Report Categories</div>
            <div className={styles.visualValue}>10</div>
            <div className={styles.visualSub}>
              Current Quarter{" "}
              <span className={styles.red}>-2%</span>
            </div>
            {/* Placeholder for categories */}
            <div className={styles.categories}>
              {["Category A", "Category B", "Category C"].map((cat, i) => (
                <div key={cat} className={styles.category}>
                  <span>{cat}</span>
                  <div
                    className={styles.catBar}
                    style={{ width: `${60 + i * 40}px` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className={styles.sectionTitle}>Recent Reports</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.length === 0 ? (
                <tr>
                  <td colSpan={4} className={styles.emptyRow}>
                    No reports found.
                  </td>
                </tr>
              ) : (
                recentReports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>{report.date}</td>
                    <td>
                      <span
                        className={`${styles.status} ${
                          styles[report.status.toLowerCase()]
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <span className={styles.actionCell}>{report.actions}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showForm && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupForm}>
            <button
              className={styles.closePopupBtn}
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2>Generate Report</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <label>
                  Report Name<span className={styles.required}>*</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    className={styles.input}
                    placeholder="Enter report name"
                  />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Date<span className={styles.required}>*</span>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleFormChange}
                    required
                    className={styles.input}
                  />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Status<span className={styles.required}>*</span>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleFormChange}
                    required
                    className={styles.input}
                  >
                    <option value="">Select status</option>
                    {statusOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Actions<span className={styles.required}>*</span>
                  <input
                    type="text"
                    name="actions"
                    value={form.actions}
                    onChange={handleFormChange}
                    required
                    className={styles.input}
                    placeholder="Enter actions"
                  />
                </label>
              </div>
              {formError && (
                <div className={styles.formError}>{formError}</div>
              )}
              <div className={styles.formActions}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;