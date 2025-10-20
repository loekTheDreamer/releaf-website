'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const WhyTelcosSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const handleScroll = () => {
      // Only enable horizontal scroll on desktop
      const isDesktop = window.innerWidth >= 1280;
      if (!isDesktop) {
        scroller.style.transform = 'translateX(0)';
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollerWidth = scroller.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Total horizontal scroll distance needed
      const maxScroll = scrollerWidth - viewportWidth;

      // Calculate progress through the section (0 to 1)
      // Section starts when top hits top of viewport, ends when bottom leaves viewport
      const sectionHeight = container.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (sectionHeight - window.innerHeight))
      );

      // Apply horizontal scroll based on vertical progress
      const horizontalScroll = progress * maxScroll;
      scroller.style.transform = `translateX(-${horizontalScroll}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} id='telcos' className='relative xl:h-[300vh]'>
      <div className='xl:sticky xl:top-0 xl:h-screen xl:overflow-hidden bg-[#F1FDCA]'>
        <div
          ref={scrollerRef}
          className='flex flex-col xl:flex-row xl:h-full xl:will-change-transform xl:w-[200vw] '>
          <section
            id='telcos-1a'
            className='xl:h-screen xl:w-screen flex-shrink-0 flex flex-col xl:flex-row'>
            <div className='w-25' />
            <div className='container flex flex-col xl:flex-row mx-auto xl:h-full w-full px-6 py-12 max-w-[644px]'>
              <div className='flex-1 flex flex-col justify-center gap-4 xl:gap-7'>
                <h1 className='text-3xl xl:text-6xl text-black font-medium'>
                  The <span className='text-[#476410]'>$20 Billion </span>
                  <br />
                  Opportunity
                </h1>
                <h4 className='text-black text-sm xl:text-xl'>
                  In low- and middle-income countries, smartphones mean critical
                  access to work, services, and community.
                </h4>
                <h4 className='text-black text-sm xl:text-xl'>
                  For telecom companies, they mean revenue.
                </h4>
                <h4 className='text-black text-sm xl:text-xl'>
                  When more people access better phones, everyone wins.
                  <br /> So why isn&apos;t it happening?
                </h4>
              </div>
            </div>
            <Image
              src='/images/telco-image1.jpg'
              alt='inline graphic'
              width={900}
              height={1080}
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 900px'
              className='object-contain xl:max-h-full w-full xl:w-auto'
            />
          </section>
          <section
            id='telcos-1a'
            className='xl:h-screen xl:w-screen flex-shrink-0 flex flex-col xl:flex-row'>
            <div className='w-25' />
            <div className='container flex flex-col xl:flex-row mx-auto xl:h-full w-full px-6 py-12 max-w-[644px]'>
              <div className='flex-1 flex flex-col justify-center gap-4 xl:gap-7'>
                <h4 className='text-black text-sm lg:text-base xl:text-lg'>
                  Our average end user makes{' '}
                  <span className='font-medium'>less than $5 per day</span>.
                  When it comes to phones, they have to go with the cheapest
                  available option.
                </h4>
                <h4 className='text-black text-sm lg:text-base xl:text-lg'>
                  As a result, Telcos in our targeted regions of LATAM and
                  Africa compete fiercely over thin profit margins, burning
                  through{' '}
                  <span className='font-medium'>
                    10-14% (more than $20 billion)
                  </span>{' '}
                  of their annual budget on marketing and retention alone.
                </h4>
                <h1 className='hidden xl:block text-xl xl:text-5xl text-black pt-8 xl:pt-20'>
                  But their customer <br />
                  turnover is still up to 67%
                  <br /> every year.
                </h1>
                <h1 className='block xl:hidden text-xl xl:text-5xl text-black pt-8 xl:pt-20'>
                  But their customer turnover is <br />
                  <span className='font-[600]'>still up to 67% every year</span>
                  .
                </h1>
              </div>
            </div>
            <Image
              src='/images/telco-image2.jpg'
              alt='inline graphic'
              width={900}
              height={1080}
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 900px'
              className='object-contain xl:max-h-full w-full xl:w-auto'
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhyTelcosSection;
