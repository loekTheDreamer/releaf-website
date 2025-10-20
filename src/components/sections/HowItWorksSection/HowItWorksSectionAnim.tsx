'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HowItWorksSection = () => {
  const contentDivRef = useRef<HTMLDivElement>(null);
  const [opacities, setOpacities] = useState([0, 0, 0]);
  const scrollAccumulator = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!contentDivRef.current) return;

      const div = contentDivRef.current;
      const rect = div.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if div is fully in view
      const isFullyInView = rect.top >= 0 && rect.bottom <= windowHeight;

      if (!isFullyInView) {
        scrollAccumulator.current = 0;
        return;
      }

      // Check if all items are at 100%
      const allVisible = opacities.every((o) => o >= 1);
      if (allVisible) {
        return; // Allow normal scrolling
      }

      // STOP SCROLLING - div is in view and items not done
      e.preventDefault();

      // Use scroll to control opacity
      scrollAccumulator.current += e.deltaY;
      scrollAccumulator.current = Math.max(0, scrollAccumulator.current);

      const maxScroll = 1200;
      const progress = Math.min(1, scrollAccumulator.current / maxScroll);
      const itemProgress = progress * 3;

      const newOpacities = [
        Math.max(0, Math.min(1, itemProgress)),
        Math.max(0, Math.min(1, itemProgress - 1)),
        Math.max(0, Math.min(1, itemProgress - 2))
      ];

      setOpacities(newOpacities);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [opacities]);

  return (
    <section id='how-it-works' className='min-h-screen bg-[#F1FDCA] py-32'>
      <div className='container mx-auto'>
        <div className='flex justify-center flex-col gap-4'>
          <h3 className='text-black text-center text-2xl'>How It Works</h3>
          <h1 className='text-black text-center text-7xl'>
            You carry the phone.
          </h1>
          <h1 className='text-black text-center text-7xl'>
            It earns the rewards.
          </h1>
        </div>
        <div
          ref={contentDivRef}
          className='flex flex-row justify-center pt-32 gap-8 bg-red-500'>
          <div
            className='relative flex flex-1 flex-col'
            style={{ minHeight: '600px' }}>
            <div
              className='absolute top-0 left-0 right-0 flex flex-row gap-30 transition-opacity duration-100'
              style={{ opacity: opacities[0] }}>
              <h3 className='text-black font-bold text-2xl'>01</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-bold text-2xl'>Simple</h4>
                <p className='text-black pr-30 pt-2'>
                  ReLeaf seamlessly integrates into existing Telco apps.
                  <br /> No extra steps, no complex onboarding, no friction.
                </p>
              </div>
            </div>

            <div
              className='absolute top-1/2 -translate-y-1/2 left-0 right-0 flex flex-row gap-30 transition-opacity duration-100'
              style={{ opacity: opacities[1] }}>
              <h3 className='text-black font-bold text-2xl'>02</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-bold text-2xl'>Automatic</h4>
                <p className='text-black pr-30 pt-2'>
                  Your device taps into unused compute power and validates
                  transactions in the background, generating rewards every time.
                </p>
              </div>
            </div>

            <div
              className='absolute bottom-0 left-0 right-0 flex flex-row gap-30 transition-opacity duration-100'
              style={{ opacity: opacities[2] }}>
              <h3 className='text-black font-bold text-2xl'>03</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-bold text-2xl'>
                  Real World Value{' '}
                </h4>
                <p className='text-black pr-30 pt-2'>
                  The rewards can cover plan and data costs, fund new devices,
                  pay for affiliate products and services, and/or create passive
                  income directly for the user.
                </p>
              </div>
            </div>
          </div>

          <Image
            src='/images/how_it_works_1.jpg'
            alt='how it works'
            width={826}
            height={614}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
