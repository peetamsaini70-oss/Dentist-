import React from 'react';
import { motion } from 'motion/react';
import doctorPortrait from "../assets/images/doctor_portrait_1782731969775.jpg";

export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Smile, <span className="text-primary">Our Priority.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Experience world-class dental care with a gentle touch. Our dedicated team uses the latest technology to ensure a comfortable and effective treatment.
          </p>
          <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
            <a href="#contact" className="bg-primary text-white px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-full font-semibold hover:bg-blue-700 transition text-center">Book Appointment</a>
            <a href="#services" className="border border-gray-300 text-gray-700 px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-full font-semibold hover:bg-gray-50 transition text-center">View Services</a>
          </div>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
        >
          <img src={doctorPortrait} alt="Friendly Dentist" className="rounded-[2rem] h-96 w-full object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
