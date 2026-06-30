import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-black/[0.16]">
      <div className="bg-primary text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> +1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} /> 123 Health Ave, City</span>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            DentalClinic
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
        <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">Book Appointment</button>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <a href="#home" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="w-full bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition">Book Appointment</button>
        </div>
      )}
    </header>
  );
};
