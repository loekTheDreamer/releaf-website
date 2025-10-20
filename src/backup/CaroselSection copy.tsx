'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const caroselData = [
  {
    imagePath: '/images/c1.jpg',
    title: 'Carosel item 1'
  },
  {
    imagePath: '/images/c2.jpg',
    title: 'Carosel item 2'
  },
  {
    imagePath: '/images/c3.jpg',
    title: 'Carosel item 3'
  },
  {
    imagePath: '/images/c4.jpg',
    title: 'Carosel item 4'
  },
  {
    imagePath: '/images/c5.jpg',
    title: 'Carosel item 5'
  }
];

const CaroselSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle infinite scroll boundaries
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const midPoint = maxScroll / 2;
      const threshold = 100; // Larger threshold for better detection

      // If scrolled past the end (right boundary)
      if (scrollContainer.scrollLeft >= maxScroll - threshold) {
        scrollContainer.scrollLeft = midPoint;
      }
      // If scrolled to the beginning (left boundary)
      else if (scrollContainer.scrollLeft <= threshold) {
        scrollContainer.scrollLeft = midPoint;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const scroll = () => {
      if (scrollContainer && !isDragging) {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isAutoScrolling, isDragging]);

  // Initialize scroll position to middle after images load
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isInitialized) return;

    const initializePosition = () => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll > 100) { // Only initialize if content has loaded
        scrollContainer.scrollLeft = maxScroll / 2;
        setIsInitialized(true);
      }
    };

    // Try multiple times to catch when images load
    const timeouts = [
      setTimeout(initializePosition, 100),
      setTimeout(initializePosition, 300),
      setTimeout(initializePosition, 500)
    ];

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [isInitialized]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsAutoScrolling(false);
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsAutoScrolling(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Multiply for faster scroll
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsAutoScrolling(true);
    }
  };

  return (
    <section className='bg-[#E3FC9A] text-white'>
      <div className='w-full relative z-10 overflow-hidden'>
        <div
          ref={scrollRef}
          className='flex overflow-x-auto flex-nowrap p-[1px] cursor-grab active:cursor-grabbing'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          {/* 5 copies for ultra-smooth bidirectional infinite scroll */}
          {[...caroselData, ...caroselData, ...caroselData, ...caroselData, ...caroselData].map(
            (item, index) => (
              <div
                key={`carousel-${index}`}
                className='flex-shrink-0 p-[1px]'
                style={{ height: '429px' }}>
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  width={600}
                  height={429}
                  className='h-full w-auto object-cover'
                  draggable={false}
                  priority
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CaroselSection;
