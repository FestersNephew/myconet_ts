import React, { useEffect } from 'react';
import styles from './ParallaxBackground.module.css';

const ParallaxBackground: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element: Element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0');
        const yPos = -window.scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll initially to position the elements correctly
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={styles.parallaxBackground + ' parallax'} />;
};

export default ParallaxBackground;
