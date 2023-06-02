import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './StakeButton.module.css';

const StakeButton: React.FC = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Navigate to staking.myconet.ai
    window.location.href = 'https://kmadk.github.io/MycoNet/';
  };
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const starPath =
  'M12 0 L14 4 L19 4 L15 7 L16 11 L12 9 L8 11 L9 7 L5 4 L10 4 Z';


  const starStyle = {
    fill: isHovered ? '#2b3a27' : '#FFD700',
    width: isHovered ? '180px' : '180px',
    height: isHovered ? '180px' : '180px',
  };

  const buttonText = {
    fontSize: isHovered ? '1.75px' : '1.75px',
    fill: isHovered ? '#2b3a27' : '#2b3a27',
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