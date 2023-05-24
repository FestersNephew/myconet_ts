import React, { useState } from 'react';
import styles from './Feature2.module.css';

const Feature2: React.FC = () => {
  const points: string[] = [
    'Supporting and contributing to the overall development and security of the Bittensor Network by running reliable Validators on all subnets maintained and designed for near 100% uptime with future plans to run all machines off of 100% green power.',
    'Creating a strong and vibrant AI community that will leverage the power of collective intelligence and foster a culture of positivity with an ethical and responsible approach to AI development built on a foundation of shared values, including a commitment to education, open-mindedness, and open communication. By coming together to share knowledge, ideas, and experiences, individuals and organizations within the community can work towards a common goal of advancing AI in a way that benefits society as a whole.',
    'Developing our own creative AI projects and APIs that will benefit humanity in an ethical way.',
    'Supporting other AI projects and communities that share in our vision of an ethical and responsible AI development and making Partnerships that will utilize access to the Network for the Good of Humanity.',
    'Having a regular podcast that will dive into interesting and mind-opening AI topics that educate, engage in honest and open discussions around the ethical and societal implications of AI and to go into depth of what MycoNet is doing and plans to do within the Bittensor Neural Network.',
    'Continue to grow, flow, adapt and pivot with the fast pace of AI development.',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? points.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === points.length - 1 ? 0 : prevIndex + 1));
  };
  

  return (
    <section className={styles.feature2}>
      <h2 className={styles.feature2Title}>
        MycoNets approach to adhere to this vision includes:
      </h2>
      <h4 className={styles.pointText}>{points[activeIndex]}</h4>
      <div className={styles.dotContainer}>
        {points.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className={styles.arrowContainer}>
      <div className={styles.arrow} onClick={handlePrevClick}>
          &lt;
          <span className={styles.arrowText}>Prev</span>
      </div>
      <div className={styles.arrow} onClick={handleNextClick}>
          &gt;
          <span className={styles.arrowText}>Next</span>
      </div>

      </div>
    </section>
  );
};

export default Feature2;
