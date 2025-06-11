'use client';

import React from 'react';
import Card from '@/components/ui/card';

const Statistics = () => {
  const stats = [
    {
      value: '98%',
      label: 'Open Rate',
      description: 'Messages that get seen'
    },
    {
      value: '60%',
      label: 'Click Rate',
      description: 'Link Click Rate Avg.'
    },
    {
      value: '3Bn+',
      label: 'Active Users',
      description: 'Monthly WhatsApp Users'
    },
    {
      value: '70%',
      label: 'Engagement',
      description: 'Conversion via CTA'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why WhatsApp Works for Business
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            WhatsApp is not just another chat app - it's your fastest channel to drive engagement, build loyalty, and scale customer conversations.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-r from-yellow-50 to-white border border-yellow-400 text-center p-8 shadow-lg"
            >
              <div className="text-4xl font-bold text-yellow-600 mb-4">
                {stat.value}
              </div>
              <div className="text-xl font-medium text-yellow-600 mb-4">
                {stat.label}
              </div>
              <div className="text-lg text-gray-700">
                "{stat.description}"
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Explore Insights with Hexibee
          </h2>
          <p className="text-xl text-gray-600">
            From growth hacks to API deep dives - learn how to make WhatsApp your most powerful channel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;