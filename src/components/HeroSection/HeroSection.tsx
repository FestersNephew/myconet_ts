import React from 'react';
import styles from './HeroSection.module.css';
import Feature1 from './../Feature1/Feature1';
import Feature2 from './../Feature2/Feature2';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.featureContainer}>
        <Feature1 />
        <Feature2 />
      </div>
      
    </section>
  );
};

export default HeroSection;
