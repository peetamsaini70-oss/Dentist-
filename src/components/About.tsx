import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="/src/assets/images/clinic_interior_1782731989761.jpg" alt="Clinic Interior" className="rounded-[2rem] h-96 w-full object-cover shadow-2xl" />
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Comfort is Our Priority</h2>
          <p className="text-gray-600 mb-6">We provide exceptional dental care in a welcoming and comfortable environment. Our team is dedicated to your oral health and smile.</p>
          <ul className="space-y-4 text-gray-700">
            <li>✓ Advanced Technology</li>
            <li>✓ Experienced Specialists</li>
            <li>✓ Comfortable Environment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
