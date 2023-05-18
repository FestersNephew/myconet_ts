import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['parallax-image']} />
    </section>
  );
};

export default HeroSection;
