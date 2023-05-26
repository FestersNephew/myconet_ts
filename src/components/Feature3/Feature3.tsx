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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible]);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <IntersectionObserverWrapper onIntersect={handleIntersect} threshold={0.2}>
      <div className={styles.container}>
        <div className={`${styles.slider} ${isVisible ? styles.animate : ''}`}>
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === activeIndex - 1;
            const isNext = index === activeIndex + 1;

            const slideClasses = [
              styles.slide,
              isActive ? styles.active : '',
              isPrevious ? styles.previous : '',
              isNext ? styles.next : '',
            ].join(' ');

            return (
              <div className={slideClasses} key={index}>
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
            );
          })}
        </div>
      </div>
    </IntersectionObserverWrapper>
  );
};

export default Feature3;
