'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

const InsightsSection = () => {
  const insightCards = [
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image_201x74.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
      buttonText: "Button"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-16">
      <div className="container mx-auto px-4">
        {/* Scrollable Cards Container */}
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
            {insightCards.map((card, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 flex-shrink-0 w-96 relative"
              >
                <div className="relative">
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    width={455} 
                    height={255}
                    className="w-full rounded-t-lg"
                  />
                  
                  {/* Navigation Buttons */}
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full p-4">
                      <Image src="/images/img_frame_black_900.svg" alt="Previous" width={32} height={32} />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-full p-4">
                      <Image src="/images/img_frame_black_900.svg" alt="Next" width={32} height={32} />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <Button 
                    variant="primary"
                    className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 text-black"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;