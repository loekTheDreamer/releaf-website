import { FC } from 'react';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
      onClick={onClose}>
      <div
        className='relative bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 overflow-hidden'
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xs font-medium transition-colors z-10'>
          Close
        </button>

        <div className='flex flex-row'>
          {/* Left side - Leaf image with light green background */}
          <div className='bg-[#e4f7a5] p-6 flex items-center justify-center w-[180px] flex-shrink-0'>
            <Image
              src='/svgs/green_leaf.svg'
              alt='Releaf logo'
              width={100}
              height={140}
              className='object-contain'
            />
          </div>

          {/* Right side - Content */}
          <div className='p-6 pr-8 flex flex-col justify-center flex-1'>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>
              Thank you for your Interest!
            </h2>
            <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
              Our team has your details and will be in touch soon.
            </p>
            <p className='text-gray-700 text-xs flex items-center gap-1.5'>
              You can also connect with us on LinkedIn
              <span className='inline-flex items-center justify-center w-4 h-4 bg-[#0077b5] text-white font-bold text-[10px] rounded'>
                in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
