import React from 'react';

export const Map = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Location</h2>
      <div className="w-full h-96 rounded-[2rem] overflow-hidden shadow-sm">
        <img 
            src="/images/map_demo_1782735432189.jpg" 
            alt="Clinic Location" 
            className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);
