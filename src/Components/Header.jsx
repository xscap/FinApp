import React from 'react';
import styles from './Header.module.css';

const Header = ({ onMenuClick }) => (
  <header className={styles.header}>
    <div className={styles.leftSection}>
      <button className={styles.menuBtn} aria-label="Open sidebar" onClick={onMenuClick}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div className={styles.logo}>FinTech</div>
    </div>
    <div className={styles.profile}>
      <span>Hello, Arnab !</span>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="profile"
        className={styles.avatar}
      />
    </div>
  </header>
);

export default Header;
