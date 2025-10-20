'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const InlineAnimationGraphic = () => {
  const images = [
    '/images/animations/anim_1.png',
    '/images/animations/anim_2.png',
    '/images/animations/anim_3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative w-[83px] h-[32px] md:w-[155px] md:h-[60px] xl:w-[248px] xl:h-[96px]'>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt='inline graphic'
          fill
          className='object-contain transition-opacity duration-1000'
          style={{
            opacity: index === currentIndex ? 1 : 0,
            pointerEvents: index === currentIndex ? 'auto' : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default InlineAnimationGraphic;
