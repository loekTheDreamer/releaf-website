import React from 'react';

const ProductSection = () => {
  return (
    <section id='product' className='py-16 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Product</h2>
          <p className='text-xl text-gray-600'>
            ReLeaf is a patent-pending, blockchain-based payment solution
            designed to meet the needs of customers in low and middle-income
            (LMIC) countries.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
          <div className='opacity-0 animate-fade-in animate-delay-100'>
            <img
              src='/lovable-uploads/af56f435-b2f4-4d2b-a9af-02d7eec35f1f.png'
              alt='ReLeaf App Interface'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
          <div className='opacity-0 animate-fade-in animate-delay-200'>
            <img
              src='/lovable-uploads/02bfd780-3db5-4a01-862e-747884621f34.png'
              alt='ReLeaf App Interface'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
          <div className='opacity-0 animate-fade-in animate-delay-300'>
            {/* <img 
              src="/lovable-uploads/9eabdee3-872b-4d9b-ac6a-d65f068107dc.png" 
              alt="ReLeaf App Interface" 
              className="w-full h-auto rounded-lg shadow-lg"
            /> */}
            <img
              src='/lovable-uploads/081cd264-99dc-40c0-93c8-195d6f4dc448.png'
              alt='ReLeaf App'
              className='w-full mx-auto h-auto drop-shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
