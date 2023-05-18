import React from 'react';
import StakeButton from '../StakeButton/StakeButton';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <StakeButton />
      <h1>Myco-Net</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">About</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
