import TeamButton from '@/components/Buttons/TeamButton';
import { FC, useRef } from 'react';
import { TeamMember } from './team';
import Image from 'next/image';
import LinkedInHoverOverlay from './LinkedInHoverOverlay';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

type Props = {
  varient: 'advisors' | 'team';
  teamMembers: TeamMember[];
};

const TeamCard: FC<Props> = ({ varient, teamMembers }) => {
  const hoverColor = varient === 'team' ? '#75A70990' : '#C9A22790';

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 356; // Width of one card (lg size)
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const targetScroll =
      direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className='pt-4 w-full'>
      {/* Header with container constraints */}
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-2 sm:px-0'>
          <p className='text-3xl'>
            {varient === 'advisors' ? 'Our Advisors' : 'Our Team'}
          </p>

          <span className='flex items-center gap-2'>
            <TeamButton variant='left' onClick={() => handleScroll('left')} />
            <TeamButton variant='right' onClick={() => handleScroll('right')} />
          </span>
        </div>
      </div>

      {/* Full-width scrollable cards */}
      <div
        ref={scrollContainerRef}
        className='overflow-x-auto pt-4 pb-4 scrollbar-hide'>
        <div className='flex snap-x snap-mandatory container mx-auto gap-4 md:gap-0 pl-4 sm:pl-0'>
          {teamMembers.map(
            ({ name, title, description, imagePath, linkedInPath }) => (
              <div
                key={name}
                className='flex-shrink-0 w-[280px] md:w-[320px] lg:w-[356px] snap-start'>
                <div className='flex flex-col items-start bg-[#323D34] h-full'>
                  {/* Image - Fixed height */}
                  <div
                    className='w-full h-[280px] md:h-[350px] lg:h-[452px] relative overflow-hidden group cursor-pointer'
                    onClick={() =>
                      window.open(linkedInPath, '_blank', 'noopener,noreferrer')
                    }>
                    <Image
                      src={imagePath}
                      alt={name}
                      fill
                      sizes='(max-width: 768px) 280px, (max-width: 1024px) 320px, 356px'
                      className='object-cover'
                    />
                    {/* Hover overlay with LinkedIn logo */}
                    <LinkedInHoverOverlay hoverColor={hoverColor} />
                  </div>

                  {/* Content with padding */}
                  <div className='pt-4 pr-0 md:pr-10 flex-1 flex flex-col gap-2'>
                    {/* Name */}
                    <div className='flex flex-row justify-between items-center'>
                      <h3 className='text-base font-normal'>{name}</h3>
                      <LinkedInIcon
                        className='block md:hidden text-[#ffffff]'
                        size={24}
                      />
                    </div>

                    {/* Title */}
                    {title && (
                      <p className='text-white text-xs md:text-sm uppercase tracking-wide'>
                        {title}
                      </p>
                    )}

                    {/* Description */}
                    <p className='text-[#C1CEC2] text-xs md:text-sm leading-relaxed'>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
