import React from 'react';
import styles from './TextBoxSection.module.css';

interface TextBoxSectionProps {
  textContent: string;
}

const TextBoxSection: React.FC<TextBoxSectionProps> = ({ textContent }) => {
  return (
    
    <section className={styles.textbox}>
      <div className={styles.textContainer}>
        <h2>Welcome to MycoNet</h2>
        <p id="textContent">
          {textContent}
        </p>
      </div>
    </section>
  );
};

export default TextBoxSection;
