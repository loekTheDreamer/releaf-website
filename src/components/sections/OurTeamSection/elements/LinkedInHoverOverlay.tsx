import { FC } from 'react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

interface Props {
  hoverColor: string;
}

const LinkedInHoverOverlay: FC<Props> = ({ hoverColor }) => {
  return (
    <div
      className='absolute inset-0 bg-transparent transition-colors duration-300 flex items-center justify-center'
      style={
        {
          ['--overlay-color' as string]: hoverColor
        } as React.CSSProperties
      }
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      }>
      <LinkedInIcon
        size={69}
        className='w-16 h-16 md:w-20 md:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'
      />
    </div>
  );
};

export default LinkedInHoverOverlay;
