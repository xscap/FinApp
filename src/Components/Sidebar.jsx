import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menu = [
  { icon: '🏠', label: 'Dashboard', path: '/' },
  { icon: '🧾', label: 'Invoices', path: '/invoices' },
  { icon: '💳', label: 'Payments', path: '/payments' },
  { icon: '👥', label: 'Customers', path: '/customers' },
  { icon: '📊', label: 'Reports', path: '/reports' },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">&times;</button>
      <div className={styles.title}>FinancePro</div>
      <nav>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li
              key={item.label}
              className={item.label === 'Dashboard' ? styles.active : ''}
              onClick={() => handleMenuClick(item.path)}
            >
              <span className={styles.icon}>{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.settings}>⚙️ Settings</div>
    </aside>
  );
};

export default Sidebar;