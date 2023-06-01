import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Background from '../Background/Background';
import styles from './SplashPage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MushroomAnimation from '../MushroomAnimation/MushroomAnimation';

import rainAnimation from '../../../public/images/rain.gif'; // Import the rain animation GIF

const SplashPage: React.FC = () => {
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)', transition: { duration: 0.3 } },
  };

  const [isRaining, setIsRaining] = useState(false);
  const [rainDuration, setRainDuration] = useState(0);

  useEffect(() => {
    let timer: number | null = null;

    const handleRainAnimation = () => {
      setIsRaining((prevIsRaining) => !prevIsRaining);
      setRainDuration(0); // Reset the rain duration when toggling rain

      if (!timer) {
        let duration = 0;

        const incrementRainDuration = () => {
          setRainDuration((prevDuration) => prevDuration + 1);
          duration++;

          if (duration < 4) {
            timer = window.setTimeout(incrementRainDuration, 1000);
          } else {
            clearTimeout(timer as number);
            timer = null;
          }
        };

        timer = window.setTimeout(incrementRainDuration, 1000);
      }
    };

    const container = document.getElementById('splashpage-container');
    container?.addEventListener('click', handleRainAnimation);

    return () => {
      container?.removeEventListener('click', handleRainAnimation);
      if (timer) {
        clearTimeout(timer as number);
      }
    };
  }, []);

  useEffect(() => {
    if (rainDuration >= 4) {
      setIsRaining(false);
    }
  }, [rainDuration]);

  return (
    <div id="splashpage-container" className={styles.container}>
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
          Our decentralized AI network aims to harness the power of artificial intelligence for the greater good. With a
          diverse team dedicated to responsible and ethical AI development, we strive to create a future where AI benefits
          humanity as a whole and serves as a counterbalance to centralized efforts by major tech companies. Join us in
          shaping an AI-driven world that prioritizes humanity&apos;s well-being.
        </p>
        {isRaining && (
          <div className={styles.rainAnimation}>
            <Image src={rainAnimation} alt="Rain Animation" layout="fill" objectFit="cover" />
          </div>
        )}
      </div>
      {rainDuration >= 4 && <MushroomAnimation />}
    </div>
  );
};

export default SplashPage;
