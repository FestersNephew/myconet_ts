import React, { useEffect, useState } from 'react';

interface AutomaticScrollProps {
  points: string[];
  interval: number;
}

const AutomaticScroll: React.FC<AutomaticScrollProps> = ({ points, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [points.length, interval]);

  return (
    <div>
      <p>{points[currentIndex]}</p>
    </div>
  );
};

export default AutomaticScroll;
