import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const handleHomeClick = () => {
    window.location.reload(); // Reload the page
  };
  return (
    <header className={styles.header}>

      <h1>Myco-Net</h1>
      <nav>
        <ul>
          <li>
          <a href="#" onClick={handleHomeClick}>Home</a> {/* Add onClick event and handleHomeClick function */}
          </li>
          <li>
            <a href="#feature1">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
