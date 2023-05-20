import React, { useState } from 'react';
import styles from './TextBoxSection.module.css';

const textboxContent = `We believe that by building a decentralized AI network, we can create a world where AI is used for the
greater good. Our Team consists of passionate Bittensor OGs from many different backgrounds who are
deeply committed to upholding a sense of responsibility in guiding the development of AI towards a
direction that benefits humanity as a whole. We share a dedication to work towards a future where AI is
used responsibly and ethically. Our goal is to create a counterbalance to the large, censored, and
centralized AI development efforts of companies such as Google, OpenAI, Microsoft, Facebook, et al. We
are building “AI for Humanity.”`;

const TextBoxSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section className={`${styles.textbox} ${expanded ? styles.expanded : ''}`}>
      {expanded && (
        <div className={styles.textContainer}>
          <p id="textContent">{textboxContent}</p>
        </div>
      )}
      <button className={styles.toggleButton} onClick={handleToggle}>
        {expanded ? 'Collapse' : 'Our Vision'}
      </button>
    </section>
  );
};

export default TextBoxSection;
