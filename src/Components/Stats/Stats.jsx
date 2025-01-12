import React from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'of global food production goes to waste — enough to feed 2 billion people who face hunger and food insecurity!', value: '33%' },
  { id: 2, name: 'worth of food is wasted each year. Thats more money than the GDP of Switzerland!', value: '$1 trillion' },
  { id: 3, name: 'of global greenhouse gas emissions is due to food wastage. Thats more than all international flights combined!', value: '8%' }
];

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        inView 
          ? 'translate-y-0 opacity-100 rotate-0'
          : 'translate-y-20 opacity-0 rotate-12'
      }`}
    >
      <div className="relative group perspective-1000">
        <div 
          style={{ backgroundColor: '#fff5f3' }}
          className="rounded-lg p-8 shadow-lg transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105"
        >
          <div className="flex flex-col items-center space-y-4">
            <div 
              style={{ color: '#e26959' }}
              className="text-5xl font-bold transform transition-transform duration-500 group-hover:scale-110"
            >
              {stat.value}
            </div>
            <p 
              style={{ color: '#e26959' }}
              className="text-center text-lg max-w-sm opacity-90"
            >
              {stat.name}
            </p>
          </div>
          <div 
            style={{ backgroundColor: 'rgba(226, 105, 89, 0.1)' }}
            className="absolute inset-0 rounded-lg transform -rotate-y-180 backface-hidden" 
          />
        </div>
      </div>
    </div>
  );
};

export default function Example() {
  return (
    <div 
      style={{ backgroundColor: '#fff5f3' }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ color: '#e26959' }}
            className="text-3xl font-bold mb-4"
          >
            Food Waste Statistics
          </h2>
          <p 
            style={{ color: '#e26959' }}
            className="text-xl opacity-90"
          >
            The global impact of food waste is staggering
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}