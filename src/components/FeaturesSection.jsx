'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-20 md:py-[120px] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-start relative">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Send Unlimited Promotional Messages<br />
              No Blocks, Just Boosts
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Boost your sales by sending high-converting messages for offers, festivals, new launches, and more all without getting blocked. Communicate smart. Sell faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" className="flex items-center">
                Learn More
                <Image src="/images/img_frame.svg" alt="Arrow" width={30} height={30} className="ml-2" />
              </Button>
              <Button variant="secondary" className="flex items-center">
                See It in Action
                <Image src="/images/img_frame.svg" alt="Arrow" width={30} height={30} className="ml-2" />
              </Button>
            </div>

            <div className="flex gap-4">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full p-4">
                <Image className="rotate-[179deg]" src="/images/img_frame_black_900.svg" alt="Feature" width={32} height={32} />
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full p-4">
                <Image src="/images/img_frame_black_900.svg" alt="Feature" width={32} height={32} />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 relative">
            {/* Stats Card */}
            <Card className="bg-gradient-to-b from-yellow-25 to-white p-6 shadow-lg w-full lg:w-auto lg:absolute lg:top-[-85px] lg:right-[10px]">
              <h3 className="text-lg font-bold text-black mb-4">Stats</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { title: 'SENT', value: '90%', img: '/images/img_group_6356251_blue_gray_400.svg' },
                  { title: 'DELIVERED', value: '80%', img: '/images/img_group_6356252_lime_700.svg' },
                  { title: 'READ', value: '60%', img: '/images/img_group_6356253_teal_300.svg' },
                  { title: 'REPLIED', value: '48%', img: '/images/img_group_6356254.svg' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="relative mb-2">
                      <Image src={stat.img} alt={stat.title} width={80} height={80} />
                      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-sm font-bold">{stat.title}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Campaign History */}
            <Card className="bg-gradient-to-b from-yellow-25 to-white p-6 w-full max-w-[380px]">
              <h3 className="text-lg font-bold text-black mb-4">Campaigns History</h3>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Image src="/images/img_ellipse_106.png" alt="Profile" width={48} height={48} className="rounded-full mr-3" />
                  <span className="text-sm">Welcome Message</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {['img_group_6356251', 'img_group_6356252', 'img_group_6356253', 'img_group_6356254'].map((img, i) => (
                      <div key={i} className="relative">
                        <Image src={`/images/${img}.svg`} alt={`Metric ${i}`} width={48} height={48} />
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{[20, 35, 15, 40][i]}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-6">
                <Image src="/images/img_group_2627.svg" alt="Analytics Chart" width={333} height={106} />
                <div className="flex justify-between text-xs mt-2 max-w-[333px]">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'].map((month, i) => (
                    <span key={i}>{month}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-4 text-xs">
                  {[
                    'img_intetity_color_circle.svg',
                    'img_intetity_color_circle_purple_a100.svg',
                    'img_intetity_color_circle_pink_100.svg',
                  ].map((icon, i) => (
                    <div key={i} className="flex items-center">
                      <Image src={`/images/${icon}`} alt="Legend" width={17} height={17} className="mr-1" />
                      <span>Content</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Message Examples */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <Card className="bg-white p-4 w-full max-w-[300px] lg:absolute lg:left-[-150px] lg:bottom-[-85px]">
                <Image src="/images/img_rectangle_2.png" alt="Product" width={219} height={109} className="rounded mb-3" />
                <div className="text-xs">
                  <p>Hey Utsav,</p>
                  <p className="font-bold">Summer Offer for you,</p>
                  <p>Grab this now or never deal!</p>
                </div>
                <div className="border-t mt-3 pt-3 flex justify-between">
                  <div className="flex items-center text-xs text-green-600">
                    <Image src="/images/img_url18348677_1.svg" alt="Link" width={11} height={11} className="mr-1" />
                    <span className="font-bold">Shop Now</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600">
                    <Image src="/images/img_group.svg" alt="Later" width={10} height={10} className="mr-1" />
                    <span className="font-bold">Maybe Later</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-white p-4 w-full max-w-[300px] lg:absolute lg:right-[100px] lg:bottom-[-85px]">
                <Image src="/images/img_rectangle_2_109x219.png" alt="Product" width={219} height={109} className="rounded mb-3" />
                <div className="text-xs">
                  <p>Hey Samantha,</p>
                  <p className="font-bold">Buy 5 at 1499 Only,</p>
                  <p>Grab the smell!</p>
                </div>
                <div className="border-t mt-3 pt-3 flex justify-between">
                  <div className="flex items-center text-xs text-green-600">
                    <Image src="/images/img_url18348677_1.svg" alt="Link" width={11} height={11} className="mr-1" />
                    <span className="font-bold">Shop Now</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600">
                    <Image src="/images/img_group.svg" alt="Later" width={10} height={10} className="mr-1" />
                    <span className="font-bold">Maybe Later</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
