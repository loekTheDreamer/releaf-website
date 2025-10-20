import Image from 'next/image';
import { Information } from './information';
import { FC } from 'react';

type Props = {
  title: string;
  information: Information[];
  iconColor: string;
  backgroundColor: string;
};
const InformationCard: FC<Props> = ({
  title,
  information,
  backgroundColor,
  iconColor
}) => {
  return (
    <div
      className='flex flex-col gap-4 md:gap-6 lg:gap-10 p-6 md:p-10 lg:p-16 xl:p-20 justify-center w-full h-full'
      style={{ backgroundColor }}>
      <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-[56px] text-white leading-tight'>
        {title}
      </h3>
      {information.map((info, index) => (
        <div
          key={index}
          className='flex flex-row gap-2 md:gap-3 lg:gap-5 items-center'>
          <div
            className='rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[72px] xl:h-[72px] flex-shrink-0 flex items-center justify-center'
            style={{ backgroundColor: iconColor }}>
            <Image
              src={info.imagePath}
              alt={info.iconName}
              width={42}
              height={42}
              className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-[42px] xl:h-[42px]'
            />
          </div>

          <p className='font-medium text-white text-sm md:text-base lg:text-xl xl:text-2xl flex-1 leading-snug'>
            {info.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InformationCard;
