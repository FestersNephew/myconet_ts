import React, { useEffect, useState } from 'react';

interface AutomaticScrollProps {
  points: string[];
  interval: number;
}

const AutomaticScroll: React.FC<AutomaticScrollProps> = ({ points, interval }) => {
  const [displayedPoints, setDisplayedPoints] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayedPoints([]);
  }, [points]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  useEffect(() => {
    if (currentIndex < points.length) {
      setDisplayedPoints((prevPoints) => [...prevPoints, points[currentIndex]]);
    }
  }, [currentIndex, points]);

  return (
    <div>
      {displayedPoints.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </div>
  );
};

export default AutomaticScroll;
