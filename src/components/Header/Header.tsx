import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const handleHomeClick = () => {
    window.location.href = '/'; // Navigate to the home page (index.tsx)
  };

  const handleAboutClick = () => {
    window.location.reload(); // Reload the current page (about.tsx)
  };

  const handleContactClick = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      window.scrollTo({
        top: footerSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={styles.header}>
      <h1>Myco-Net</h1>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={handleContactClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
