import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './StakeButton.module.css';

const StakeButton: React.FC = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Navigate to staking.myconet.ai
    window.location.href = 'https://staking.myconet.ai/';
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const starPath = 'M12 0 L14 4 L19 4 L15 7 L16 11 L12 9 L8 11 L9 7 L5 4 L10 4 Z';

  const starStyle = {
    fill: isHovered ? '#2b3a27' : '#FFD700',
  };

  const buttonText = {
    fontSize: '0.15rem',
    fill: '#2b3a27',
    fontWeight: 'bold',
    textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
  };

  return (
    <div className={styles.stakeButtonContainer}>
      <button
        className={styles.stakeButton}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={starStyle as React.CSSProperties}>
          <path d={starPath} />
          <text className={styles.buttonText} style={buttonText as React.CSSProperties}>
            <tspan x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
              Stake with Us
            </tspan>
          </text>
        </svg>
      </button>
    </div>
  );
};

export default StakeButton;
