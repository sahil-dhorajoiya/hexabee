'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import InputField from '@/components/ui/InputField';
import Card from '@/components/ui/card';

const EngagementSuite = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    brandType: '',
    website: '',
    niche: '',
    timeSlot: '',
    whatsappUpdates: true,
    captcha: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Strategy session booked successfully!');
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Booking Form */}
         <div>
             <Card className="lg:col-span-2 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-black mb-4">
                Let's Talk 1-on-1 : Book Your Strategy Session
              </h2>
              <p className="text-xl text-gray-600">
                Use your work email - we hate spam too.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    name="firstName"
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <InputField
                    name="lastName"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <InputField
                    name="phone"
                    placeholder="Where can we ping you?"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Work Email Only, Please"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                </div>
              </div>

              {/* Company Details */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">Company Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    name="brandType"
                    placeholder="Your Brand or Agency?"
                    value={formData.brandType}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <InputField
                    name="website"
                    placeholder="Drop Your Site Here"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <InputField
                    name="niche"
                    placeholder="What's Your Niche?"
                    value={formData.niche}
                    onChange={handleInputChange}
                    className="border border-black rounded-md"
                  />
                  <div className="relative">
                    <InputField
                      name="timeSlot"
                      placeholder="Pick a Time That Works"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="border border-black rounded-md"
                    />
                    <Image 
                      src="/images/img_frame_black_900_24x24.svg" 
                      alt="Calendar" 
                      width={24} 
                      height={24} 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </div>
              </div>

              {/* Captcha */}
              <div className="bg-gray-50 border border-gray-300 rounded p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleInputChange}
                      className="w-6 h-6 border-2 border-gray-400 rounded mr-3"
                    />
                    <span className="text-sm font-medium">I'm not a robot</span>
                  </div>
                  <div className="ml-auto">
                    <Image src="/images/img_logo.svg" alt="reCAPTCHA" width={48} height={46} />
                    <p className="text-xs text-gray-500 text-center mt-1">Privacy - Terms</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Updates Checkbox */}
              <div className="flex items-start">
                <div className="bg-yellow-400 rounded p-1 mr-3 mt-1">
                  <Image src="/images/img_check.svg" alt="Check" width={14} height={14} />
                </div>
                <label className="text-sm text-gray-600">
                  Send me quick updates via WhatsApp (no spam, pinky promise)
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                variant="primary"
                size="large"
                className="w-full bg-yellow-100 text-black font-semibold border border-yellow-400"
              >
                Book My Slot
              </Button>
            </form>
          </Card>
         </div>

          {/* Side Cards */}
          <div className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8  ">
            {/* WhatsApp Widget */}
            <Card className="bg-green-100 p-8 rounded-3xl mb-0 h-[420px] card-one">
              <h3 className="text-lg font-bold text-black mb-4">
                WhatsApp Widget that Actually Works
              </h3>
              <p className="text-gray-600 mb-6">
                Supercharge chats, boost engagement & grow faster - all in your brand style.
              </p>
              <Image 
                src="/images/img_animation_1747946787276_1.png" 
                alt="Widget Animation" 
                width={110} 
                height={110} 
                className="mx-auto mb-6"
              />
              <Button 
                variant="secondary"
                className="w-full border border-green-500"
              >
                Get the Widget
              </Button>
            </Card>

            {/* QR Code Access */}
            <Card className="bg-blue-100 p-8 rounded-3xl mb-0 h-[420px] card-two">
              <h3 className="text-lg font-bold text-black mb-4 text-center">
                QR Chat Access - One Scan Away
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Let customers start WhatsApp chats instantly with your brand's smart QR codes.
              </p>
              <Image 
                src="/images/img_animation_1747947008535_1.png" 
                alt="QR Animation" 
                width={110} 
                height={110} 
                className="mx-auto mb-6"
              />
              <Button 
                variant="secondary"
                className="w-full border border-blue-500"
              >
                Make My QR
              </Button>
            </Card>

            {/* Partnership */}
            <Card className="bg-orange-100 p-8 rounded-3xl mb-0 h-[420px] card-three">
              <h3 className="text-lg font-bold text-black mb-4 text-center">
                Grow Together, Win Together
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Partner with us to build big - strategic collabs that open new growth doors.
              </p>
              <Image 
                src="/images/img_animation_1747947311981_1.png" 
                alt="Partnership Animation" 
                width={160} 
                height={160} 
                className="mx-auto mb-6"
              />
              <Button 
                variant="secondary"
                className="w-full border border-orange-500"
              >
                Let's Partner
              </Button>
            </Card>

            {/* White Label */}
            <Card className="bg-pink-100 p-8 rounded-3xl h-[420px] card-four">
              <h3 className="text-lg font-bold text-black mb-4 text-center">
                White Label = Your Brand, Front & Center
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Offer every solution under your own name, logo & vibe - no trace of us.
              </p>
              <Image 
                src="/images/img_animation_1747947916291_1.png" 
                alt="White Label Animation" 
                width={135} 
                height={135} 
                className="mx-auto mb-6"
              />
              <Button 
                variant="secondary"
                className="w-full border border-pink-500"
              >
                Explore Branding
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSuite;