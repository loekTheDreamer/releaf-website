import { FC } from 'react';
import Image from 'next/image';
import logoMask from '../../../../../public/images/logo_mask.png';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/releaf-financial/', '_blank');
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
      onClick={onClose}>
      <div
        className='relative bg-white rounded-lg shadow-2xl w-[90vw] h-[80vw] sm:w-[707px] sm:h-[347px] max-w-[707px] max-h-[347px] mx-4 overflow-hidden'
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xs font-medium transition-colors z-10'>
          Close
        </button>

        <div className='flex flex-row h-full'>
          {/* Left side - Leaf image with light green background */}
          <div className='bg-[#F1FDCA] flex items-center justify-center flex-shrink-0 p-4 sm:p-[2%]'>
            <Image
              src={logoMask}
              alt='Releaf logo'
              width={200}
              height={275.61}
              className='w-[120px] h-[165px] sm:w-auto sm:h-full sm:max-h-[95%] object-contain'
            />
          </div>

          {/* Right side - Content */}
          <div className='p-6 pr-8 flex flex-col justify-between flex-1'>
            <div className='pt-0 sm:pt-10'>
              <h2 className='text-sm sm:text-3xl font-medium text-black mb-3'>
                Thank you for your <br />
                Interest!
              </h2>
              <p className='text-[#191C1F] mb-4 text-base sm:text-lg leading-relaxed'>
                Our team has your details and will be in touch soon.
              </p>
            </div>

            <p className='text-[#191C1F] text-sm sm:text-base'>
              You can also connect with us on{' '}
              <span
                className='inline-flex items-center gap-1.5 cursor-pointer'
                onClick={handleLinkedInClick}>
                LinkedIn
                <LinkedInIcon className='text-[#75A709] w-5 h-5 sm:w-[30px] sm:h-[30px]' />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
