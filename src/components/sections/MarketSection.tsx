import React from 'react';
import { CheckCircle } from 'lucide-react';

const MarketSection = () => {
  return (
    <section id='market' className='py-16 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='flex-1 order-2 md:order-1'>
            <div className='opacity-0 animate-fade-in'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Market Opportunity
              </h2>
              <p className='text-lg text-gray-600 mb-6'>
                ReLeaf serves the underbanked and unbanked populations in low
                and middle-income countries.
              </p>
              <ul className='space-y-4'>
                <li className='flex items-start'>
                  <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                  <span>
                    Over 4 billion people worldwide are underserved by
                    traditional financial services.
                  </span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                  <span>
                    Earning an extra $2-5 per day could be life-changing.
                  </span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                  <span>
                    Lower transaction fees mean they keep more of their money.
                  </span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                  <span>
                    The global P2P payment market is growing at a 15% CAGR,
                    expected to surpass $13 trillion by 2032.
                  </span>
                </li>
              </ul>

              <div className='mt-8'>
                <h3 className='text-2xl font-bold mb-4'>Latin America</h3>
                <p className='text-lg text-gray-600 mb-4'>
                  ReLeaf's initial launch region.
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                    <span>Existing P2P options are expensive.</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                    <span>
                      High volume of remittances creates a large market for
                      affordable solutions.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-releaf-green mr-2 flex-shrink-0 mt-0.5' />
                    <span>
                      A substantial unbanked and underbanked population.
                    </span>
                  </li>
                </ul>
                <p className='mt-4 text-lg'>
                  Our strong connections in Latin America, spanning business and
                  academia, bring the ReLeaf solution to those who will benefit
                  most.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 order-1 md:order-2 opacity-0 animate-fade-in animate-delay-200'>
            <div className='flex flex-col gap-4'>
              <img
                src='/lovable-uploads/735375e7-398d-44f5-8f8a-d32b99d68e38.png'
                alt='ReLeaf Use Case'
                className='rounded-lg shadow-md'
              />
              <img
                src='/lovable-uploads/a348107e-7f4e-44b7-a86f-346c17425d27.png'
                alt='ReLeaf Use Case'
                className='rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
