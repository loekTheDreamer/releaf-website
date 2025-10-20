import { FC } from 'react';

type Props = {
  className?: string;
  size?: number;
};

const CheckCircleIcon: FC<Props> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      style={{ flexShrink: 0 }}>
      <circle cx='16' cy='16' r='15' stroke='#75A709' strokeWidth='2' />
      <path
        d='M7.69531 15.5512L13.5311 21.3869L24.3048 10.6133'
        stroke='#75A709'
        strokeWidth='2'
      />
    </svg>
  );
};

export default CheckCircleIcon;
