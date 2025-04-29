import React from 'react';
import { Separator } from '@/components/ui/separator';

const FooterSection = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center mb-6 md:mb-0'>
            <img
              src='/lovable-uploads/9ceeaba1-4572-4e8a-aad2-6cac77f0d666.png'
              alt='ReLeaf Logo'
              className='h-10 w-10'
            />
            <span className='ml-2 text-xl font-medium'>ReLeaf Inc</span>
          </div>
          {/* <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 items-center md:items-start">
            <div>
              <h3 className="font-medium text-lg mb-2">Product</h3>
              <ul className="space-y-2">
                <li><a href="#product" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#market" className="text-gray-300 hover:text-white transition-colors">Market</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400'>
          <p>© 2025 ReLeaf Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
