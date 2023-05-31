import React from 'react';
import { motion } from 'framer-motion';
import Background from '../Background/Background';
import styles from './SplashPage.module.css';
import Link from 'next/link';

const SplashPage: React.FC = () => {
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)', transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.content}>
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.logo}>MycoNet</h1>
        </motion.div>

        <Link href="/about" passHref>
          <motion.span
            className={`${styles.link}`}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Take responsibility. Shape ethical AI. Create a better future.
          </motion.span>
        </Link>
        <p className={styles.typing}>
          Our decentralized AI network aims to harness the power of artificial intelligence for the greater good. With a diverse team dedicated to responsible and ethical AI development, we strive to create a future where AI benefits humanity as a whole and serves as a counterbalance to centralized efforts by major tech companies. Join us in shaping an AI-driven world that prioritizes humanitys well-being.
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
