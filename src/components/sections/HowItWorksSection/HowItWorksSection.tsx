import Image from 'next/image';

const HowItWorksSection = () => {
  const items = [
    {
      number: '01',
      title: 'Simple',
      description:
        'ReLeaf seamlessly integrates into existing Telco apps. No extra steps, no complex onboarding, no friction.',
      image: '/images/how_it_works_1.jpg'
    },
    {
      number: '02',
      title: 'Automatic',
      description:
        'Your device taps into unused compute power and validates transactions in the background, generating rewards every time.',
      image: '/images/how_it_works_2.jpg'
    },
    {
      number: '03',
      title: 'Real World Value',
      description:
        'The rewards can cover plan and data costs, fund new devices, pay for affiliate products and services, and/or create passive income directly for the user.',
      image: '/images/how_it_works_3.jpg'
    }
  ];

  return (
    <section
      id='how-it-works'
      className='min-h-screen bg-[#F1FDCA] py-16 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center flex-col gap-4'>
          <h3 className='text-black text-center text-xl lg:text-2xl'>
            How It Works
          </h3>
          <h1 className='text-black text-center text-3xl lg:text-7xl'>
            You carry the phone.
          </h1>
          <h1 className='text-black text-center text-3xl lg:text-7xl'>
            It earns the rewards.
          </h1>
        </div>

        {/* Mobile Layout: Vertical with images after each item */}
        <div className='flex flex-col gap-8 pt-16 lg:hidden'>
          {items.map((item) => (
            <div key={item.number} className='flex flex-col gap-4'>
              <div className='flex flex-row gap-4'>
                <h3 className='text-black font-medium text-xl'>
                  {item.number}
                </h3>
                <div className='flex flex-col'>
                  <h4 className='text-black font-medium text-xl'>
                    {item.title}
                  </h4>
                  <p className='text-[#191C1F] pt-2 text-sm'>
                    {item.description}
                  </p>
                </div>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={343}
                height={279}
                sizes='100vw'
                className='object-cover w-full h-auto'
              />
            </div>
          ))}
        </div>

        {/* Desktop Layout: Text items on left, single image on right */}
        <div className='hidden lg:flex flex-row justify-center pt-32 gap-8'>
          <div
            className='relative flex flex-1 flex-col'
            style={{ minHeight: '600px' }}>
            <div className='absolute top-0 left-0 right-0 flex flex-row gap-30'>
              <h3 className='text-black font-medium text-2xl'>01</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-medium text-2xl'>Simple</h4>
                <p className='text-[#191C1F] pr-30 pt-2'>
                  ReLeaf seamlessly integrates into existing Telco apps.
                  <br /> No extra steps, no complex onboarding, no friction.
                </p>
              </div>
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 left-0 right-0 flex flex-row gap-30'>
              <h3 className='text-black font-medium text-2xl'>02</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-medium text-2xl'>Automatic</h4>
                <p className='text-[#191C1F] pr-30 pt-2'>
                  Your device taps into unused compute power and validates
                  transactions in the background, generating rewards every time.
                </p>
              </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 flex flex-row gap-30'>
              <h3 className='text-black font-medium text-2xl'>03</h3>
              <div className='flex flex-col'>
                <h4 className='text-black font-medium text-2xl'>
                  Real World Value{' '}
                </h4>
                <p className='text-[#191C1F] pr-30 pt-2'>
                  The rewards can cover plan and data costs, fund new devices,
                  pay for affiliate products and services, and/or create passive
                  income directly for the user.
                </p>
              </div>
            </div>
          </div>

          <div className='relative flex-1 max-w-[826px] aspect-[826/614]'>
            <Image
              src='/images/how_it_works_3.jpg'
              alt='how it works'
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
