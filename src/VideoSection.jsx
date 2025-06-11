'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        {/* <div className="flex justify-center mb-16">
          <div className="flex space-x-4">
            <div className="bg-yellow-100 border border-yellow-400 rounded-full px-8 py-4 flex items-center">
              <Image src="/images/img_broadcast.svg" alt="Marketing" width={30} height={30} className="mr-3" />
              <span className="text-black font-semibold text-lg">Marketing</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-4 flex items-center">
              <Image src="/images/img_integration.svg" alt="Sales" width={30} height={30} className="mr-3" />
              <span className="text-black text-lg">Sales</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-4 flex items-center">
              <Image src="/images/img_live_chat.svg" alt="Support" width={30} height={30} className="mr-3" />
              <span className="text-black text-lg">Support</span>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        {/* <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Combine all your channels into one powerful AI platform
          </h3>
          <h2 className="text-4xl font-bold text-black mb-8 max-w-4xl mx-auto">
            Engage customers your way with an AI-powered omnichannel platform built for marketing, sales, and support.
          </h2>
        </div> */}

        {/* Video Player */}
        {/* <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
            <Image 
              src="/images/img_frame_1000001319.svg" 
              alt="Video Player Interface" 
              width={1145} 
              height={698} 
              className="rounded-lg"
            />
          </div>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <Button 
            variant="secondary"
            size="large"
          >
            Watch More
          </Button>
          <Button 
            variant="primary" 
            size="large"
          >
            Book A Demo
          </Button>
        </div> */}

        {/* Design Experience Banner */}
        <div className="bg-yellow-100 border border-yellow-400 rounded-full py-4 px-6 text-center mb-12 w-fit mx-auto">
          <span className="text-lg font-bold text-black">Design Your Ideal Customer Experience</span>
        </div>

        {/* Description */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Tailor Your Own Smart Engagement Suite with Hexibee
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create personalized solutions: WhatsApp Widgets, QR Codes, White Labeling & Strategic Partnerships - all in one place
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;