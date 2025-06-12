'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        {/* Category Tabs
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-yellow-100 border border-yellow-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center">
              <Image src="/images/img_broadcast.svg" alt="Marketing" width={30} height={30} className="mr-2 sm:mr-3" />
              <span className="text-black font-semibold text-base sm:text-lg">Marketing</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 sm:py-4 flex items-center">
              <Image src="/images/img_integration.svg" alt="Sales" width={30} height={30} className="mr-2 sm:mr-3" />
              <span className="text-black text-base sm:text-lg">Sales</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 sm:py-4 flex items-center">
              <Image src="/images/img_live_chat.svg" alt="Support" width={30} height={30} className="mr-2 sm:mr-3" />
              <span className="text-black text-base sm:text-lg">Support</span>
            </div>
          </div>
        </div> */}

        {/* Main Headings */}
        {/* <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
            Combine all your channels into one powerful AI platform
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 sm:mb-8 max-w-5xl mx-auto">
            Engage customers your way with an AI-powered omnichannel platform built for marketing, sales, and support.
          </h2>
        </div> */}

        {/* Video Player */}
        {/* <div className="relative w-full max-w-5xl mx-auto aspect-video mb-10 sm:mb-12">
          <div className="bg-black rounded-lg w-full h-full flex items-center justify-center overflow-hidden">
            <Image 
              src="/images/img_frame_1000001319.svg" 
              alt="Video Player Interface" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12">
          <Button variant="secondary" size="large">Watch More</Button>
          <Button variant="primary" size="large">Book A Demo</Button>
        </div> */}

        {/* Design Banner */}
        {/* <div className="bg-yellow-100 border border-yellow-400 rounded-full py-3 px-4 sm:py-4 sm:px-6 text-center mb-10 w-fit mx-auto">
          <span className="text-base sm:text-lg font-bold text-black">Design Your Ideal Customer Experience</span>
        </div> */}

        {/* Description Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
            Tailor Your Own Smart Engagement Suite with Hexibee
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Create personalized solutions: WhatsApp Widgets, QR Codes, White Labeling & Strategic Partnerships – all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
