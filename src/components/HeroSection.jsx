'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-10 main-hero-section">
      <div className="container mx-auto px-4">
        {/* API Badge & Meta Partner */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
          {/* API Badge */}
          <div className="bg-gradient-to-r from-[#fff5dc] to-[#feebc8]  rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center" style={{ border: '1px solid rgba(252, 217, 162, 0.3)' }}>
            <span className="text-black font-bold font-Inter text-base md:text-lg mr-3 md:mr-4 text-center">
              Powered by Official WhatsApp Business API
            </span>
            <Image src="/images/img_svg.svg" alt="WhatsApp" width={24} height={24} />
          </div>

          {/* Meta Partnership */}
          <div className="flex items-center">
            <Image src="/images/img_meta_logo.png" alt="Meta Logo" width={48} height={48} />
            <div className="ml-3 flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-normal text-[#000000] underline">Meta</span>
              <span className="text-sm text-[#000000] underline">Tech Partner</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl. font-sora font-bold text-black leading-tight mb-6">
            Talk Better. Sell Faster.
            <br />
            With Hexibee on WhatsApp.
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 font-Inter mb-6 max-w-4xl mx-auto">
            Built for speed. Designed for growth. Hexibee helps you
            <br className="hidden sm:block" />
            connect, convert, and scale—smarter.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-Inter text-gray-600">
            No cost, no catch. Get all the essentials on our free plan.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-14">
          <Button variant="primary" size="large" className="flex items-center">
            Start Free
            <Image src="/images/img_frame.svg" alt="Arrow" width={24} height={24} className="ml-2" />
          </Button>
          <Button variant="secondary" size="large" className="flex items-center">
            Schedule a Demo
            <Image src="/images/img_frame.svg" alt="Arrow" width={24} height={24} className="ml-2" />
          </Button>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: 'img_broadcast.svg', label: 'Broadcast' },
            { icon: 'img_integration.svg', label: 'Integration' },
            { icon: 'img_live_chat.svg', label: 'Live Chat' },
            { icon: 'img_chatbot.svg', label: 'AI Chatbot' },
            { icon: 'img_ads.svg', label: 'WhatsApp Ads' },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#fffdf9] to-[#fff7e6]  border border-[rgba(252,217,162,0.3)] rounded-full px-5 py-2 sm:px-6 sm:py-3 flex items-center"
            >
              <Image
                src={`/images/${feature.icon}`}
                alt={feature.label}
                width={28}
                height={28}
                className="mr-2 sm:mr-3"
              />
              <span className="text-black font-medium text-sm sm:text-lg">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
