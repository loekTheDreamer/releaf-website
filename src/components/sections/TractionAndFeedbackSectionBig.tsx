import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Content = ({
  onHeightChange
}: {
  onHeightChange: (height: number) => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current && onHeightChange) {
        const height = contentRef.current.offsetHeight;
        onHeightChange(height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [onHeightChange]);

  return (
    <div ref={contentRef}>
      <div className='flex flex-row justify-between bg-[#EEE49A] '>
        <div className='relative w-[40%] sm:w-auto sm:h-auto sm:max-w-[40%] sm:aspect-[356/280]'>
          <Image
            src='/images/t_david.jpg'
            alt='David Chaum'
            width={356.08}
            height={280}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between text-black p-6 sm:p-8 md:p-10 gap-4'>
          <p className='text-sm sm:text-base'>
            &quot;ReLeaf is what I have always dreamed that cryptocurrency would
            be. A win for telcos, retailers, and consumers.&quot;
          </p>
          <p className='text-sm sm:text-base'>
            <span className='font-medium'>David Chaum</span> <br />
            Co-Founder, inventor of blockchain, and early pioneer of digital
            payments.
          </p>
        </div>
      </div>
      <div className='flex flex-row-reverse justify-between bg-[#F1FDCA]'>
        <div className='relative w-[40%] sm:w-auto sm:h-auto sm:max-w-[40%] sm:aspect-[349/280]'>
          <Image
            src='/images/t_rami.jpg'
            alt='Rami Amin'
            width={348.97}
            height={280}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between text-black p-6 sm:p-8 md:p-10 gap-4'>
          <p className='text-sm sm:text-base'>
            &quot;It&apos;s a great market to start, I would switch my telco for
            that amount of money; it is worthwhile.&quot;
          </p>
          <p className='text-sm sm:text-base'>
            <span className='font-medium'>Rami Amin</span> <br />
            Partner & Senior Leader, Dalberg Consulting
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between bg-[#CDF660]'>
        <div className='relative w-[40%] sm:w-auto sm:h-auto sm:max-w-[40%] sm:aspect-[357/280]'>
          <Image
            src='/images/t_sergio.jpg'
            alt='Sergio Navajas'
            width={357.08}
            height={280}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between text-black p-6 sm:p-8 md:p-10 gap-4'>
          <p className='text-sm sm:text-base'>
            &quot;It is amazing what you&apos;re doing.&quot;
          </p>
          <p className='text-sm sm:text-base'>
            <span className='font-medium'>Sergio Navajas</span> <br />
            Senior Specialist, IADB Lab, Interamerican Development Bank
          </p>
        </div>
      </div>
    </div>
  );
};

const TractionAndFeedbackSectionBig = () => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id='traction-and-feedback' className='min-h-screen'>
      <div className='flex flex-1 justify-center py-20'>
        <h2 className='text-3xl sm:text-4xl md:text-7xl text-black text-center'>
          Traction and Feedback
        </h2>
      </div>
      <div className='container mx-auto pb-12 xl:pd-0 '>
        <div className='flex flex-col px-2 sm:px-0 xl:flex-row justify-center gap-4'>
          <div className='w-full xl:w-1/2 flex-col'>
            <Content onHeightChange={setContentHeight} />
            <p className='text-black text-base sm:text-lg md:text-xl pt-5'>
              Telcos and other platforms have signed Letters of Intent (LOI) to
              launch ReLeaf pilot programs in Central and South America.
            </p>
          </div>
          <div className='w-full xl:w-1/2 flex-col'>
            <Image
              src='/images/Inspira.jpg'
              alt='Inspira'
              width={772.5}
              height={842}
              className='w-full h-auto object-cover'
              style={{
                height:
                  !isSmallScreen && contentHeight > 0
                    ? `${contentHeight}px`
                    : 'auto'
              }}
            />
            <p className='text-black text-base sm:text-lg md:text-xl pt-5 '>
              Inspira Te Ilumina announcing their future pilot with ReLeaf
              during Peru TechWeek 2025. Further pilot agreements are in
              discussion in Africa, Europe, Asia, and the Middle East.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionAndFeedbackSectionBig;
