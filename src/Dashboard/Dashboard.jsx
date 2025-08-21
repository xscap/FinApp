import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import styles from './Dashboard.module.css';

const DUMMY = {
  totalRevenue: 2345678,
  outstandingBalance: 123456,
  avgPaymentTime: 28,
  revenueTrend: [60, 40, 55, 35, 60, 45, 60],
  monthlyRevenue: [60, 90, 75, 110, 130, 100, 120],
  monthlyRevenueValue: 195473,
  monthlyRevenueChange: -5,
  productRevenue: 876543,
  productRevenueChange: 8,
  categories: [
    { name: 'Category A', value: 60 },
    { name: 'Category B', value: 90 },
    { name: 'Category C', value: 120 },
    { name: 'Category D', value: 150 },
  ],
  revenueTrendChange: 12,
};

const Dashboard = ({ sidebarOpen }) => {
  const [data, setData] = useState(DUMMY);

  useEffect(() => {
    // Example API call
    // fetch('/api/dashboard')
    //   .then(res => res.json())
    //   .then(apiData => setData(apiData));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <main
          className={styles.main}
          style={{ marginLeft: sidebarOpen ? '230px' : '230px' }}
        >
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.summary}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Total Revenue</div>
              <div className={styles.cardValue}>
                ${data.totalRevenue?.toLocaleString() ?? '--'}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Outstanding Balance</div>
              <div className={styles.cardValue}>
                ${data.outstandingBalance?.toLocaleString() ?? '--'}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Avg. Payment Time</div>
              <div className={styles.cardValue}>
                {data.avgPaymentTime ?? '--'} days
              </div>
            </div>
          </div>
          <h2 className={styles.sectionTitle}>Revenue Overview</h2>
          <div className={styles.overview}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewTitle}>Revenue Trend (Last 12 Months)</div>
              <div className={styles.overviewValue}>
                ${data.totalRevenue?.toLocaleString() ?? '--'}
              </div>
              <div className={styles.overviewSub}>
                Last 12 Months <span className={styles.green}>+{data.revenueTrendChange}%</span>
              </div>
              <div className={styles.chart}>
                <svg width="100%" height="80">
                  <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    points={data.revenueTrend
                      .map((v, i) => `${i * 30},${80 - v}`)
                      .join(' ')}
                  />
                </svg>
                <div className={styles.months}>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
            <div className={styles.overviewCard}>
              <div className={styles.overviewTitle}>Monthly Revenue Comparison</div>
              <div className={styles.overviewValue}>
                ${data.monthlyRevenueValue?.toLocaleString() ?? '--'}
              </div>
              <div className={styles.overviewSub}>
                Current Year <span className={styles.red}>{data.monthlyRevenueChange}%</span>
              </div>
              <div className={styles.barChart}>
                {(data.monthlyRevenue || []).map((value, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{ height: `${value}px` }}
                    title={`$${value * 1000}`}
                  ></div>
                ))}
                <div className={styles.months}>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
            <div className={styles.overviewCard}>
              <div className={styles.overviewTitle}>Revenue by Product Category</div>
              <div className={styles.overviewValue}>
                ${data.productRevenue?.toLocaleString() ?? '--'}
              </div>
              <div className={styles.overviewSub}>
                Current Year <span className={styles.green}>+{data.productRevenueChange}%</span>
              </div>
              <div className={styles.categories}>
                {(data.categories || []).map((cat, i) => (
                  <div key={cat.name} className={styles.category}>
                    <span>{cat.name}</span>
                    <div className={styles.catBar} style={{ width: `${cat.value}px` }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;