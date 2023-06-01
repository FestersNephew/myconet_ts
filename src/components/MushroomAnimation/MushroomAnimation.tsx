import React from 'react';
import Image from 'next/image';

const MushroomAnimation: React.FC = () => {
  return (
    <div style={{ position: 'fixed', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
      <Image
        src="/mushroom_animation.svg"
        alt="Mushroom Animation"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default MushroomAnimation;
