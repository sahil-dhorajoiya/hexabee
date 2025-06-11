'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-white pt-40 pb-10">
      <div className="container  mx-auto px-4">
        {/* API Badge */}
      <div className=''>
      <div className="flex justify-center mb-8">
          <div className="bg-yellow-100 border border-yellow-400 rounded-full px-8 py-4 flex items-center">
            <span className="text-black font-bold text-lg mr-4">Powered by Official WhatsApp Business API</span>
            <Image src="/images/img_svg.svg" alt="WhatsApp" width={24} height={24} />
          </div>
        </div>

        {/* Meta Partnership */}
        <div className="flex justify-center items-center mb-12">
          <Image src="/images/img_meta_logo.png" alt="Meta Logo" width={48} height={48} />
          <div className="ml-4 flex items-end gap-1">
            <span className="text-2xl font-normal underline">Meta</span>
            <div className="text-sm underline">Tech Partner</div>
          </div>
        </div>
      </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-black leading-tight mb-8">
            Talk Better. Sell Faster.<br />
            With Hexibee on WhatsApp.
          </h1>
          <p className="text-3xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Built for speed. Designed for growth. Hexibee helps you<br />
            connect, convert, and scale-smarter.
          </p>
          <p className="text-xl text-gray-600 mb-12">
            No cost, no catch. Get all the essentials on our free plan.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <Button 
            variant="primary" 
            size="large"
            className="flex items-center"
          >
            Start Free
            <Image src="/images/img_frame.svg" alt="Arrow" width={30} height={30} className="ml-2" />
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            className="flex items-center"
          >
            Schedule a Demo
            <Image src="/images/img_frame.svg" alt="Arrow" width={30} height={30} className="ml-2" />
          </Button>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-15">
          <div className="bg-yellow-100 border border-yellow-400 rounded-full px-6 py-3 flex items-center">
            <Image src="/images/img_broadcast.svg" alt="Broadcast" width={30} height={30} className="mr-3" />
            <span className="text-black font-semibold text-lg">Broadcast</span>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 flex items-center">
            <Image src="/images/img_integration.svg" alt="Integration" width={30} height={30} className="mr-3" />
            <span className="text-black text-lg">Integration</span>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 flex items-center">
            <Image src="/images/img_live_chat.svg" alt="Live Chat" width={30} height={30} className="mr-3" />
            <span className="text-black text-lg">Live Chat</span>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 flex items-center">
            <Image src="/images/img_chatbot.svg" alt="AI Chatbot" width={30} height={30} className="mr-3" />
            <span className="text-black text-lg">AI Chatbot</span>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full px-6 py-3 flex items-center">
            <Image src="/images/img_ads.svg" alt="WhatsApp Ads" width={32} height={32} className="mr-3" />
            <span className="text-black text-lg">WhatsApp Ads</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;