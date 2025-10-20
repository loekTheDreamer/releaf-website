import Image from 'next/image';
import ActionButton from './Buttons/ActionButton';
import { useState, useEffect } from 'react';

export default function FabCard() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      // Small delay to trigger the opacity transition
      setTimeout(() => setVisible(true), 50);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 z-50 bg-white border-8 border-[#ffffff] shadow-[0_10px_50px_rgba(0,0,0,0.1)] overflow-hidden w-[calc(100%-2rem)] max-w-lg transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
      <button
        onClick={() => setShow(false)}
        className='absolute top-1 right-2 text-black hover:text-gray-600 transition-colors z-10 cursor-pointer'
        aria-label='Close'>
        CLOSE
      </button>
      <div className='flex flex-row'>
        <div className='flex flex-col justify-between pr-4 flex-1'>
          <div className='bg-[#F1FDCA] px-3 py-1 rounded-full w-fit'>
            <p className='text-black text-xs font-medium'>News</p>
          </div>
          <h3 className='text-black text-sm font-medium'>
            David Chaum, inventor of blockchain and digital cash, joins ReLeaf
            as Co-Founder and CTVO.
          </h3>
          <p className='text-black text-xs'>
            David Chaum’s contributions changed the world. He’s pioneering
            ReLeaf to do the same.
          </p>
          <div className='w-fit'>
            <ActionButton
              title='Read more'
              className='px-2 sm:px-8'
              onClick={() => {
                setShow(false);
                document
                  .getElementById('our-team')
                  ?.scrollIntoView({ behavior: 'instant' });
              }}
            />
          </div>
        </div>
        <div className='flex-shrink-0'>
          <Image
            src='/images/news.jpg'
            alt='Image of David Chaum'
            width={200}
            height={250}
            className='h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
