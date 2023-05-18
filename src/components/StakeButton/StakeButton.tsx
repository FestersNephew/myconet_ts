import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './StakeButton.module.css';

const StakeButton: React.FC = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Handle button click event, e.g., navigate to another page
    router.push('/another-page');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const starPath = 'M12 2.6l1.96 6.03h6.35l-5.11 3.71 1.96 6.03-5.1-3.71-5.12 3.71 1.96-6.03-5.11-3.71h6.35z';

  const starStyle = {
    fill: isHovered ? '#FFD700' : '#2b3a27',
    width: isHovered ? '180px' : '160px',
    height: isHovered ? '180px' : '160px',
  };

  const buttonText = {
    fontSize: isHovered ? '2px' : '3px',
    fill: isHovered ? '#000000' : '#bba97a',
  };

  return (
    <button
      className={styles.stakeButton}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={starStyle as React.CSSProperties}>
        <path d={starPath} />
        <text className={styles.buttonText} style={buttonText as React.CSSProperties}>
          <tspan x="100%" y="100%" textAnchor="middle" dominantBaseline="middle">
            Stake with Us
          </tspan>
        </text>
      </svg>
    </button>
  );
};

export default StakeButton;
