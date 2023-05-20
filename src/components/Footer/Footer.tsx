import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const email = 'myconetai@proton.me';
  const twitterUrl = 'https://twitter.com/@MycoNetAI';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p className={styles.email}>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow us on social media:</h3>
          <ul>
            <li>
              <a href={twitterUrl}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Myco-Net-AI. All rights reserved. Page built by UncleFestersNephew</p>
      </div>
    </footer>
  );
};

export default Footer;
