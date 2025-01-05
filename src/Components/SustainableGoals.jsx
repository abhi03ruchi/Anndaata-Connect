import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from "../Components/assets/2.png";
import img3 from "../Components/assets/12.png";
export default function SustainableGoals() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const images = [
    { src: img1, alt: "SDG 1", id: 1 },
    { src: img3, alt: "SDG 2", id: 2 },
  ];

  return (
    <div className="bg-[#fff5f3] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div 
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-center text-4xl font-bold mb-8 text-[#e26959]">
            Sustainable Development Goals
          </h2>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center perspective-1000">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`transform transition-all duration-700 hover:z-10 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group">
                <div 
                  className={`
                    relative transform transition-all duration-500 
                    ${hoveredIndex === index ? 'scale-105 -rotate-y-12' : 'scale-100 rotate-y-0'}
                  `}
                >
                  <div className="absolute inset-0 bg-[#e26959] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <img
                    className="w-full h-auto rounded-xl shadow-xl transform transition-transform duration-500"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div 
                    className={`
                      absolute inset-0 border-4 border-[#e26959] rounded-xl 
                      transition-all duration-500 
                      ${hoveredIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}
                    `}
                  />
                </div>
                
                <div 
                  className={`
                    absolute inset-0 bg-gradient-to-t from-[#e26959]/20 to-transparent 
                    rounded-xl transform transition-all duration-500 
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}