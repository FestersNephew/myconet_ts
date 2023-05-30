import React, { useState, useEffect } from 'react';
import styles from './Feature3.module.css';
import IntersectionObserverWrapper from '../IntersectionObserverWrapper';

const slides = [
  {
    header: 'Delegate with us!',
    text: [
      'Here is how:',
      'Subnetwork 3: Finney Validator: UID 423',
      'Subnetwork 1: Prompt Network: UID 146',
      'Delegator Hot Key Address: 5Dkv8-7qjGG-F42SN-hDAep-6WZp6-5E29c-2vUPU-fDBGD-NevEN-CMs',
    ],
  },
  {
    header: 'We believe that owning TAO goes much deeper...',
    text:
      'By delegating your TAO to MycoNet, it is an easy way to join and contribute to a community that understands this very important responsibility we humans have, moving into the future with developing a decentralized AI for Humanity. We seek to attract delegators and developers who share our passion and vision and who are committed to advancing AI for the benefit of all.',
  },
  {
    header: 'How will delegators benefit from delegating to MycoNet?',
    text:
      'MycoNets dedication to scaling with the Bittensor Network ensures reliable and secure validators with near 100% uptime. We plan on maintaining validators on multiple subnets to maximize our delegators incentive return. We are developing a unique NFT platform that will be the first of its kind in the Bittensor Network. It will give pride of ownership, reward loyal delegators with a competitive APR rakeback program that utilizes a unique NFT mechanism to reward loyalty and the amount of TAO delegated. There may also be possibilities for referral rewards, staking incentives, and more (Details TBA).',
  },
];

const Feature3: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const feature3Section = document.getElementById('feature3-section');
      const rect = feature3Section?.getBoundingClientRect();

      if (rect?.top && rect.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="feature3-section" className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      {slides.map((slide, index) => (
        <div className={styles.slide} key={index}>
          <div className={styles.textBox}>
            <h1 className={styles.heading}>{slide.header}</h1>
            {Array.isArray(slide.text) ? (
              <p className={styles.text}>
                {slide.text.map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ) : (
              <p className={styles.text}>{slide.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature3;
