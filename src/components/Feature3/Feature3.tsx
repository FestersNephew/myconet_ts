import React, { useState, useEffect } from 'react';
import styles from './Feature3.module.css';

const slides = [
  {
    header: 'Interested in Delegating and becoming a part of the MycoNet community?',
    text: [
      'Here is how:',
      'Subnetwork 3: Finney Validator UID 423',
      'Subnetwork 1: Prompt Network. Validator UID 146',
      'Delegator Hot Key Address: 5Dkv87qjGGF42SNhDAep6WZp65E29c2vUPUfDBGDNevENCMs',
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

const Component: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Update the active slide when `currentSlide` changes
    const slideElements = document.getElementsByClassName(styles.slide);
    for (let i = 0; i < slideElements.length; i++) {
      slideElements[i].classList.remove(styles.active);
    }
    slideElements[currentSlide].classList.add(styles.active);
  }, [currentSlide]);

  const handleScrollRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleScrollLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`} key={index}>
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
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.scrollButton} onClick={handleScrollLeft}>
          &lt;
        </button>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <button className={styles.scrollButton} onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Component;
