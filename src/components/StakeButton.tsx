import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

  const buttonStyle: React.CSSProperties = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    position: 'absolute',
    top: '40px',
    right: '40px',
  };

  const starStyle: React.CSSProperties = {
    fill: isHovered ? '#FFD700' : '#2b3a27',
    transition: 'fill 0.3s ease',
    width: '160px', // Adjust the size of the star
    height: '160px', // Adjust the size of the star
  };

  const buttonText: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -65%)',
    fontSize: '14px', // Adjust the font size of the text
    color: isHovered ? '#000000' : '#bba97a',
    transition: 'color 0.3s ease',
  };

  const starPath = 'M12 2.6l1.96 6.03h6.35l-5.11 3.71 1.96 6.03-5.1-3.71-5.12 3.71 1.96-6.03-5.11-3.71h6.35z';

  return (
    <button
      className="stake-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={starStyle}>
        <path d={starPath} />
      </svg>
      <span className="button-text" style={buttonText}>
        Stake with Us
      </span>
    </button>
  );
};

export default StakeButton;
