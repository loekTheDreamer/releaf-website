import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

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
  return (
    <section className='bg-[#E3FC9A] text-white'>
      <div className='w-full relative z-10 overflow-hidden'>
        <Marquee className='p-[1px]'>
          {caroselData.map((item, index) => (
            <div
              key={`first-${index}`}
              className='flex-shrink-0 p-[1px]'
              style={{ height: '429px' }}>
              <Image
                src={item.imagePath}
                alt={item.title}
                width={600}
                height={429}
                className='h-full w-auto object-cover'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CaroselSection;
