import Image from 'next/image';

const OurSolutionSection = () => {
  return (
    <section
      id='our-solution'
      className='min-h-screen bg-white flex flex-col pt-8'>
      <div className='container mx-auto py-24 px-8 md:px-18'>
        <div className='flex flex-col md:flex-row gap-4 md:justify-between'>
          <div className='flex-1'>
            <h3 className='text-black'>How Does ReLeaf Help?</h3>
          </div>
          <div className='flex-2 flex flex-col gap-4 pl-0 md:pl-10 lg:pl-30'>
            <h2 className='text-black text-3xl xl:text-5xl 2xl:text-7xl'>
              ReLeaf is a new way for <br />
              phones to make money.
            </h2>
            <p className='text-black text-base md:text-xl'>
              ReLeaf works with Telcos as a backend service provider, using a
              randomized group of individual phones as a validation network for
              financial transactions.
            </p>
            <p className='text-black text-base md:text-xl'>
              With our patent-pending, Proof-of-Intent technology, we harness a
              fraction of a phone&apos;s idle processing power to secure and
              settle payments over blockchain, rewarding each device owner for
              their passive participation.
            </p>
          </div>
        </div>
      </div>
      <Image
        src='/images/releaf_phone.jpg'
        alt='our solution'
        width={1920}
        height={1276}
        className='w-full h-auto'
      />
    </section>
  );
};

export default OurSolutionSection;
