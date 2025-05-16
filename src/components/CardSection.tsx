'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { BrainCircuit, CalendarClock, LineChart } from 'lucide-react';

const cardsData = [
  {
    title: 'AI Forecasting',
    description: 'Leverage predictive analytics to make informed decisions.',
    icon: <BrainCircuit className="h-10 w-10 text-blue-400 mb-4" />,
  },
  {
    title: 'Smart Planning',
    description: 'Automate strategies based on real-time insights.',
    icon: <CalendarClock className="h-10 w-10 text-yellow-400 mb-4" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Improve outcomes with intelligent recommendations.',
    icon: <LineChart className="h-10 w-10 text-green-400 mb-4" />,
  },
];

const CardsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="!pb-12" // Add bottom padding for space under cards (where dots go)
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-white shadow-md h-full flex flex-col items-center justify-center text-center">
              {card.icon}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardsSection;
