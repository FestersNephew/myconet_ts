import React from 'react';
import Link from 'next/link';
import Background from '../Background/Background';
import styles from './SplashPage.module.css';


const SplashPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.content}>
        <h1 className={styles['fade-in']}>
          <Link href="/about" passHref>
            <span className={styles.link}>
              Take responsibility. Shape ethical AI. Create a better future.
            </span>
          </Link>
        </h1>
        <p className={styles.typing}>
          Our decentralized AI network aims to harness the power of artificial intelligence for the greater good. With a diverse team dedicated to responsible and ethical AI development, we strive to create a future where AI benefits humanity as a whole and serves as a counterbalance to centralized efforts by major tech companies. Join us in shaping an AI-driven world that prioritizes humanitys well-being.
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
