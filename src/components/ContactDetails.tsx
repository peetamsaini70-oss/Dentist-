import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactDetails = () => (
  <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-600">
       <span className="flex items-center gap-2"><Phone size={16} className="text-primary"/> +1 (555) 123-4567</span>
       <span className="flex items-center gap-2"><Mail size={16} className="text-primary"/> info@dentalclinic.com</span>
       <span className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> 123 Health Ave, City</span>
    </div>
  </section>
);
