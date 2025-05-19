import React, { useEffect, useState } from 'react';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane Doe',
    role: 'Designer',
    message: `"Byway’s tech courses are top-notch! As someone who’s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    image: '/testimonials/jane.svg',
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Developer',
    message: `"Byway’s tech courses are top-notch! As someone who’s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    image: '/testimonials/jane.svg',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    role: 'Engineer',
    message: `"Byway’s tech courses are top-notch! As someone who’s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    image: '/testimonials/jane.svg',
  },
  {
    id: '4',
    name: 'Mike Lee',
    role: 'Tech Lead',
    message: '“Top-quality content for skill development.”',
    image: '/testimonials/jane.svg',
  },
  {
    id: '5',
    name: 'Sara Park',
    role: 'UX Designer',
    message: `"Byway’s tech courses are top-notch! As someone who’s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
    image: '/testimonials/jane.svg',
  },
  {
    id: '6',
    name: 'John Smith',
    role: 'Developer',
    message: '“Great for staying competitive in tech.”',
    image: '/testimonials/jane.svg',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 768) setVisibleCards(1);
    else if (width < 980) setVisibleCards(2);
    else setVisibleCards(3);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const trackWidth = (testimonials.length * 100) / visibleCards;
  const itemWidth = 100 / testimonials.length;
  const translateX = `-${itemWidth * currentIndex}%`;

  return (
    <div className='bg-[#F8FAFC] py-12'>
      <div className="w-[90%] max-w-[1900px] mx-auto py-8">
        <div className="sm:flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#0F172A]">
            What Our Customers Say <br /> About Us
          </h2>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={prevSlide}
              className="bg-[#94A3B8] sm:p-1.5 rounded hover:bg-[#CBD5E1]"
            >
              <img src="/assets/icons/leftarrow.svg" alt="Left" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#94A3B8] sm:p-1.5 rounded hover:bg-[#CBD5E1]"
            >
              <img src="/assets/icons/rightarrow.svg" alt="Right" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(${translateX})`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="px-2 my-4 shrink-0"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="bg-white shadow-[0_0_3px_0.5px_#3B82F61F] rounded-xl p-4 h-full flex flex-col justify-between">
                  <div className="text-blue-500 text-2xl mb-2 py-4">
                    <img src="/assets/icons/quotes.svg" alt="Quote" className="w-10 h-10" />
                  </div>
                  <p className="text-base font-normal text-black mb-4 max-w-screen-xl w-full sm:w-11/12 md:w-4/5 lg:w-5/6 xl:w-4/5">
                    {t.message}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold text-black">{t.name}</p>
                      <p className="text-sm font-normal text-[#334155]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
