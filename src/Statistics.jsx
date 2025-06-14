'use client';

import React from 'react';
import Card from '@/components/ui/card';

const Statistics = () => {
  const stats = [
    { value: '98%', label: 'Open Rate', description: 'Messages that get seen' },
    { value: '60%', label: 'Click Rate', description: 'Link Click Rate Avg.' },
    { value: '3Bn+', label: 'Active Users', description: 'Monthly WhatsApp Users' },
    { value: '70%', label: 'Engagement', description: 'Conversion via CTA' }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
            Why WhatsApp Works for Business
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            WhatsApp is not just another chat app - it's your fastest channel to drive engagement, build loyalty, and scale customer conversations.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16" >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-[#fdfbf6] to-[#f8f3eb]   text-center p-6 sm:p-8 rounded-xl " style={{ border: '1px solid rgba(252, 217, 162, 0.3)'}}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#F9AF18] mb-3 sm:mb-4">
                {stat.value}
              </div>
              <div className="text-lg sm:text-xl font-medium text-[#F9AF18] mb-3 sm:mb-4">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-700">
                "{stat.description}"
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
            Explore Insights with Hexibee
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From growth hacks to API deep dives - learn how to make WhatsApp your most powerful channel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
