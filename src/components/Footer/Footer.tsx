import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const [emailText, setEmailText] = useState('Email: info@myco-net.com');
  const [footerBackground, setFooterBackground] = useState('');

  const handleEmailClick = () => {
    setEmailText('Email us at myco-net@gmail.com');
  };

  const handleFooterMouseOver = () => {
    setFooterBackground('#4a5a3f');
  };

  const handleFooterMouseOut = () => {
    setFooterBackground('');
  };

  return (
    <footer
  id="footer"
  className={styles.footer}
  onMouseOver={handleFooterMouseOver}
  onMouseOut={handleFooterMouseOut}
  style={footerBackground ? { backgroundColor: footerBackground } : undefined as React.CSSProperties | undefined}
>

      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p className={styles.email} onClick={handleEmailClick}>
            {emailText}
          </p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow us on social media:</h3>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Myco-Net. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
