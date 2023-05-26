import React, { useEffect, useRef } from 'react';

interface IntersectionObserverWrapperProps {
  onIntersect: () => void;
  rootMargin?: string;
  threshold?: number | number[];
  children: React.ReactNode;
}

const IntersectionObserverWrapper: React.FC<IntersectionObserverWrapperProps> = ({
  onIntersect,
  rootMargin = '0px',
  threshold = 1.0,
  children,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      { rootMargin, threshold }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [onIntersect, rootMargin, threshold]);

  return <div ref={targetRef}>{children}</div>;
};

export default IntersectionObserverWrapper;
