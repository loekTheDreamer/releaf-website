import { FC } from 'react';

type Props = {
  onClick: () => void;
  variant: 'left' | 'right';
};

const TeamButton: FC<Props> = ({ onClick, variant = 'left' }) => {
  const leftArrow = 'M16 7.75L1 7.75M1 7.75L7.75 14.5M1 7.75L7.75 1';
  const rightArrow = 'M1 8.25H16M16 8.25L9.25 1.5M16 8.25L9.25 15';
  
  return (
    <button
      className='group flex items-center justify-center w-12 h-12 rounded-full bg-[#161D17] hover:bg-[#CDF660] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#161D17]'
      onClick={onClick}>
      <svg
        width='17'
        height='16'
        viewBox='0 0 17 16'
        fill='none'
        className='text-white group-hover:text-[#161D17] transition-colors'>
        <path
          d={variant === 'left' ? leftArrow : rightArrow}
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default TeamButton;
