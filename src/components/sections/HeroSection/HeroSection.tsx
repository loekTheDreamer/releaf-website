import Image from 'next/image';
import ActionButton from '../../Buttons/ActionButton';
import InlineAnimationGraphic from './elements/InlineAnimationGraphic';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen sm:h-screen bg-white flex items-center justify-center overflow-hidden sm:overflow-hidden'>
      <div className='container mx-auto md:px-6 h-full relative'>
        <div className='relative flex flex-col md:flex-row h-full items-start md:items-center justify-between py-20 md:py-0'>
          {/* Left side - Content */}
          <div className='flex-1 h-auto md:h-full flex items-start md:items-center justify-start'>
            <div className='flex flex-col gap-[42px] px-4'>
              <div className='leading-none flex flex-col gap-[6px]'>
                <h2 className='text-[36px] md:text-[72px] xl:text-[92px] text-black font-medium m-0 p-0'>
                  The Future of
                </h2>
                <div className='flex flex-row items-center gap-2 md:gap-0'>
                  <InlineAnimationGraphic />
                  <h2 className='text-[36px] md:text-[72px] xl:text-[92px] text-black font-medium md:ml-4 m-0 p-0'>
                    Smartphones
                  </h2>
                </div>
                <h2 className='text-[36px] md:text-[72px] xl:text-[92px] text-black font-medium m-0 p-0'>
                  is{' '}
                  <span className='text-[#476410] font-medium'>
                    Self-funding
                  </span>
                </h2>
              </div>

              <div className='text-sm md:text-lg text-black pr-20 '>
                <h3>
                  ReLeaf turns everyday smartphones into passive income machines
                  using our patent&shy;-pending technology.{' '}
                  <span className='text-[#476410]'>
                    With tens of millions of users pre-signing for our 2026
                    release
                  </span>
                  , ReLeaf will fundamentally change what it means to own a
                  smartphone.
                </h3>
              </div>
              <div>
                <ActionButton
                  verticalPadding='3'
                  title='Get in touch'
                  onClick={() => {
                    document
                      .getElementById('get-in-touch')
                      ?.scrollIntoView({ behavior: 'instant' });
                  }}
                />
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-1 h-full items-center justify-center' />

          {/* Small screen image - non-absolute */}
          <div className='block sm:hidden w-full mt-8 pointer-events-none'>
            <Image
              src='/images/hero_phone_sm.png'
              alt='Hand holding phone mockup'
              width={375}
              height={614}
              className='w-full h-auto object-contain'
              priority
            />
          </div>

          {/* Larger screen image - absolute positioned on the right */}
          <div className='hidden sm:block absolute bottom-0 h-1/2 sm:h-auto right-0 md:-right-10 md:w-[500px] lg:w-[700px] xl:w-[800px] 2xl:w-[950px] pointer-events-none'>
            <Image
              src='/images/hero_phone.png'
              alt='Hand holding phone mockup'
              width={1116}
              height={1026}
              className='w-full h-full object-cover sm:h-auto sm:object-contain'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
