import React from 'react';
import { stats } from '../data/mockData';

const StatSection = () => {
  return (
    <div className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatSection;
