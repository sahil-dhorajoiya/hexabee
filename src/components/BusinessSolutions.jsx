'use client';

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/card';

const BusinessSolutions = () => {
  const features = [
  {
    title: "WhatsApp Payments",
    description:
      "Let customers pay right inside WhatsApp. Send invoices, collect payments – no extra steps.",
    buttons: [
      { text: "Generate Invoice" },
      { text: "Notify Payee" },
      { text: "Get Paid" },
      {
        text: "Track Payments",
        cta: true,
      },
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Product",
    type: "payments",
  },
  {
    title: "WhatsApp Forms",
    description:
      "Collect feedback, take bookings, or run surveys – all inside WhatsApp.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Forms UI",
    type: "forms",
  },
  {
    title: "WhatsApp Carousels",
    description:
      "Showcase your products with swipeable carousels. Let customers browse and buy – without leaving chat.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Carousel Mockup",
    type: "carousels",
  },
  {
    title: "Best Customer Support",
    description:
      "Give fast, human support on WhatsApp. Your team replies in real time, customers feel the difference.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Support Agent",
    type: "support",
  },
];
  return (<>
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Across industries. Across regions. Trusted by 100+ brands.
          </h2>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_wranglerlogosvg.svg" alt="Wrangler" width={166} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_logosvg_blue_a200.svg" alt="Google" width={191} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_logopng_60x478.png" alt="McDonald's" width={478} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_logosvg_blue_gray_900.svg" alt="Stripe" width={125} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_logopng.png" alt="Spotify" width={219} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_pumalogosvg.svg" alt="Puma" width={120} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_logosvg.svg" alt="Expedia" width={270} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_hsbclogosvg.svg" alt="HSBC" width={222} height={60} />
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-3 flex items-center justify-center">
            <Image src="/images/img_vector.svg" alt="Airbnb" width={191} height={60} />
          </Card>
        </div>
        </div>
      
        {/* CTA Banner */}
        <div className="bg-yellow-100 border border-yellow-400  py-4 px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-xl text-black">Share links, contact info, payments and more with ease.</span>
            <span className="text-xl font-bold text-black underline cursor-pointer">Make It Happen</span>
          </div>
        </div>
        <div className='container mx-auto '>
        {/* Power Your Growth Section */}
        <div className="text-center mt-16 mb-12">
          <h3 className="text-xl font-bold text-black mb-4">Power Your Growth</h3>
          <h2 className="text-4xl font-bold text-black mb-6">Built for Modern Business Needs</h2>
          <p className="text-xl text-gray-600">
            Hexibee is built for speed and scale, crafted to support teams across industries.
          </p>
        </div>

        {/* Business Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WhatsApp Payments */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-12">
            <h3 className="text-4xl font-bold text-black mb-6">WhatsApp Payments</h3>
            <p className="text-xl text-gray-600 mb-8">
              Let customers pay right inside WhatsApp.<br />
              Send invoices, collect payments - no extra steps.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded p-4 flex items-center">
                <span className="text-sm font-semibold">Generate invoice</span>
              </div>
              <div className="bg-white rounded p-4 flex items-center">
                <span className="text-sm font-semibold">Notify Payee</span>
              </div>
              <div className="bg-white rounded p-4 flex items-center">
                <span className="text-sm font-semibold">Get Paid</span>
              </div>
              <div className="bg-yellow-400 rounded p-4 flex items-center">
                <span className="text-sm font-semibold text-white">Track Payments</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="bg-white p-4">
                <div className="text-center">
                  <span className="text-lg font-bold">₹ 5445</span>
                  <p className="text-xs">Sent to Luxe Stores</p>
                  <p className="text-xs">Complete</p>
                </div>
              </Card>
              <Card className="bg-white p-4">
                <Image src="/images/img_rectangle_2_76x152.png" alt="Payment" width={152} height={76} className="rounded mb-2" />
                <div className="text-xs text-[#000000]">
                  <p>Hey Utsav,</p>
                  <p className="font-bold">Your product is waiting in the cart.</p>
                  <p className="font-bold">Complete your purchase now!</p>
                  <div className="border-t mt-2 pt-2">
                    <span className="text-green-600 font-bold">Pay Now</span>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          {/* WhatsApp Forms */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-12">
            <h3 className="text-4xl font-bold text-black mb-6">WhatsApp Forms</h3>
            <p className="text-xl text-gray-600 mb-8">
              Collect feedback, take bookings, or run surveys - all inside WhatsApp.
            </p>
            
            <div className="relative">
              <Image 
                src="/images/img_untitledhu15498060597604712745_5.png" 
                alt="Form Interface" 
                width={393} 
                height={200} 
                className="rounded"
              />
              <Image 
                src="/images/img_untitledhu15498060597604712745_4.png" 
                alt="Form Overlay" 
                width={270} 
                height={127} 
                className="absolute top-8 right-8 rounded"
              />
              <Image 
                src="/images/img_vector_406.svg" 
                alt="Form Icon" 
                width={51} 
                height={21} 
                className="absolute bottom-4 right-12"
              />
            </div>
          </Card>

          {/* WhatsApp Carousels */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-12">
            <h3 className="text-4xl font-bold text-black mb-6">WhatsApp Carousels</h3>
            <p className="text-xl text-gray-600 mb-8">
              Showcase your products with swipeable carousels.<br />
              Let customers browse and buy - without leaving chat.
            </p>
            
            <div className="relative">
              <Image 
                src="/images/img_image61024x768_1.png" 
                alt="Carousel Interface" 
                width={313} 
                height={169} 
                className="rounded"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-400 rounded px-4 py-2">
                <span className="text-xs font-semibold text-white">Custom Images and Messages</span>
              </div>
            </div>
          </Card>

          {/* Best Customer Support */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 p-12 relative overflow-hidden">
            <Image 
              src="/images/img_image_7.png" 
              alt="Support Background" 
              width={792} 
              height={462} 
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Best Customer Support</h3>
              <p className="text-xl text-white">
                Give fast, human support on WhatsApp.<br />
                Your team replies in real time, customers feel the difference.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
<div
  class="mx-auto my-16 max-w-5xl rounded-xl border-2 border-dashed border-purple-400
         bg-gradient-to-br from-white via-[#fffdf7] to-[#fff8e9] p-10 md:p-16"
>
  <div class="grid items-center gap-12 md:grid-cols-2">
    <div>
      <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        WhatsApp Payments
      </h2>

      <p class="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">
        Let customers pay right inside WhatsApp.<br />
        Send invoices, collect payments – no extra steps.
      </p>

      <div
        class="mt-12 w-64 overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-100"
      >
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&q=80&w=600"
          alt="Product"
          class="h-32 w-full object-cover"
        />
        <div class="p-4 text-sm">
          <h3 class="mb-1 font-medium text-gray-900">Hey (Sahil),</h3>
          <p class="mb-4 leading-snug text-gray-700">
            Your product is waiting in the cart. Complete your purchase now!
          </p>
          <span class="font-semibold text-emerald-600">Pay Now</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <button
        class="w-56 rounded-full border border-emerald-300 py-3 font-semibold text-gray-900
               shadow-sm transition hover:bg-emerald-50"
      >
        Generate Invoice
      </button>
      <span class="my-1 text-lg text-emerald-400">+</span>

      <button
        class="w-56 rounded-full border border-emerald-300 py-3 font-semibold text-gray-900
               shadow-sm transition hover:bg-emerald-50"
      >
        Notify Payee
      </button>
      <span class="my-1 text-lg text-emerald-400">+</span>

      <button
        class="w-56 rounded-full border border-emerald-300 py-3 font-semibold text-gray-900
               shadow-sm transition hover:bg-emerald-50"
      >
        Get Paid
      </button>
      <span class="my-1 text-lg text-emerald-400">↓</span>

      <button
        class="mt-2 w-56 rounded-full bg-amber-500 py-3 font-semibold text-white
               shadow-lg transition hover:bg-amber-600"
      >
        Track Payments
      </button>
    </div>
  </div>
</div>

  </>

  );
};

export default BusinessSolutions;