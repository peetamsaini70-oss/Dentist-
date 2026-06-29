import React from 'react';

const services = [
  { title: "General Dentistry", description: "Comprehensive checkups and care." },
  { title: "Teeth Whitening", description: "Brighten your smile today." },
  { title: "Dental Implants", description: "Restore your smile permanently." },
  { title: "Root Canal", description: "Save your natural teeth." },
  { title: "Braces", description: "Straighten your teeth effectively." },
  { title: "Cosmetic Dentistry", description: "Enhance your smile's aesthetics." },
  { title: "Pediatric Dentistry", description: "Gentle care for little smiles." },
  { title: "Emergency Care", description: "Immediate attention when needed." },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-[1.25rem] shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
