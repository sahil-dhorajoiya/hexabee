'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const AdditionalFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Why Choose Hexibee?</h2>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-[#fdfbf6] to-[#f8f3eb]  border-b border-[#f0e6dc] py-8 mb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center text-center">
            <div className="flex gap-3 justify-center items-center">
              <Image src="/images/img_mask_group.svg" alt="Live Assistance" width={24} height={24} className="mb-2" />
              <span className="text-xl font-medium text-black">Live Assistance</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <Image src="/images/img_mask_group.svg" alt="No Hidden Fees" width={24} height={24} className="mb-2" />
              <span className="text-xl font-medium text-black">No Hidden Fees</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <Image src="/images/img_mask_group.svg" alt="24/7 Support" width={24} height={24} className="mb-2" />
              <span className="text-xl font-medium text-black">Round-the-Clock Support</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <Image src="/images/img_mask_group.svg" alt="Better Conversions" width={24} height={24} className="mb-2" />
              <span className="text-xl font-medium text-black">Better Conversions</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="primary" 
            size="large"
            className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 text-black font-semibold"
          >
            Try Hexibee Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;