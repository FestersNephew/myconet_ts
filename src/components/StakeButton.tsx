import React from 'react';
import { useRouter } from 'next/router';

const StakeButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    // Handle button click event, e.g., navigate to another page
    router.push('/another-page');
  };

  return (
    <button className="stake-button" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2.6l1.96 6.03h6.35l-5.11 3.71 1.96 6.03-5.1-3.71-5.12 3.71 1.96-6.03-5.11-3.71h6.35z" />
      </svg>
      Stake with Us
    </button>
  );
};

export default StakeButton;
