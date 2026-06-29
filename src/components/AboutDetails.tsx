import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail } from 'lucide-react';

export const AboutDetails = () => (
  <section className="py-12 bg-white px-4 border-t border-gray-100">
    <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
        <div className="flex justify-center gap-6 mb-8 text-primary">
            <a href="#" className="hover:opacity-75 transition"><Instagram /></a>
            <a href="#" className="hover:opacity-75 transition"><Facebook /></a>
            <a href="#" className="hover:opacity-75 transition"><Youtube /></a>
        </div>
        <div className="flex flex-col gap-2 text-gray-600">
            <a href="tel:+15551234567" className="hover:text-primary transition font-medium">+1 (555) 123-4567</a>
            <a href="mailto:info@dentalclinic.com" className="hover:text-primary transition font-medium">info@dentalclinic.com</a>
        </div>
    </div>
  </section>
);
