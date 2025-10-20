import Image from 'next/image';
import { FC } from 'react';
import LinkedInHoverOverlay from './LinkedInHoverOverlay';
import { heroMembers } from './team';

const hoverColor = '#75A70990';

const HeroTeamCard: FC = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row mt-16 md:mt-24 px-2 sm:px-0 gap-8 lg:gap-0'>
        {heroMembers.map(
          ({ linkedInPath, imagePath, name, title, description }, index) => (
            <div
              key={name}
              className={index === 1 ? 'lg:flex-[694]' : 'lg:flex-[448]'}>
              <div className='flex flex-col items-start bg-[#323D34] h-full'>
                {/* Image - Fixed height */}
                <div
                  className='w-full h-[280px] md:h-[350px] lg:h-[452px] relative overflow-hidden group cursor-pointer'
                  onClick={() =>
                    linkedInPath &&
                    window.open(linkedInPath, '_blank', 'noopener,noreferrer')
                  }>
                  <Image
                    src={imagePath}
                    alt={name}
                    fill
                    sizes='(max-width: 768px) 280px, (max-width: 1024px) 350px, 452px'
                    priority={index === 1}
                    className='object-cover object-top'
                    style={{ objectPosition: 'center 20%' }}
                  />
                  {linkedInPath && (
                    <LinkedInHoverOverlay hoverColor={hoverColor} />
                  )}
                </div>

                {/* Content with padding */}
                <div className='pt-4 pr-4 flex-1'>
                  {/* Name */}
                  <h3 className='text-[#C5D96F] text-lg md:text-xl font-normal mb-1'>
                    {name}
                  </h3>

                  {/* Title */}
                  <p className='text-white text-xs md:text-sm mb-3 uppercase tracking-wide'>
                    {title}
                  </p>

                  {/* Description */}
                  <p className='text-white/80 text-xs md:text-sm leading-relaxed'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default HeroTeamCard;
