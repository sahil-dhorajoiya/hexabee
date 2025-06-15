'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

const InsightsSection = () => {
  const insightCards = [
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button"
    },
    {
      image: "/images/img_base_image.png",
      title: "Card Title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button"
    }
  ];

  return (
    <section className=" py-16" style={{ background: ' linear-gradient(90deg, #fffdf9 0%, #fff7e6 100%)' }}>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          className="group"
        >
          {insightCards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-gradient-to-r from-[#fdfbf6] to-[#f8f3eb] border border-yellow-400 w-full" style={{border: '1px solid rgba(252, 217, 162, 0.3)'}}>
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={455}
                    height={255}
                    className="w-full h-auto rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <Button
                    variant="primary"
                    className="bg-gradient-to-r from-[#fffdf9] to-[#fff7e6]  border border-[rgba(252,217,162,0.3)] text-black"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </Card>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !left-0 absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-sm cursor-pointer border" style={{
  // backgroundColor: '#ffffff',
  borderWidth: '1px',
  borderImage: 'linear-gradient(90deg, rgba(249, 175, 24, 0.3), rgba(255, 195, 0, 0.3)) 1',
  borderImageSlice: 1
}}>
  <Image src="/icons/arrow-left.svg" alt="Prev" width={24} height={24} />
</div>

<div className="swiper-button-next !right-0 absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-sm cursor-pointer border" style={{
  // backgroundColor: '#ffffff',
  borderWidth: '1px',
  borderImage: 'linear-gradient(90deg, rgba(249, 175, 24, 0.3), rgba(255, 195, 0, 0.3)) 1',
  borderImageSlice: 1
}}>
  <Image src="/icons/arrow-right.svg" alt="Next" width={24} height={24} />
</div>

        </Swiper>
      </div>
    </section>
  );
};

export default InsightsSection;
