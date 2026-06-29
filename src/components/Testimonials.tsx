import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "John D.", text: "Excellent, painless experience!", rating: 5 },
  { name: "Sarah M.", text: "Very professional team.", rating: 5 },
  { name: "Mike R.", text: "Best dental care in city.", rating: 5 },
];

export const Testimonials = () => (
  <section className="py-12 px-4">
    <div className="max-w-4xl mx-auto flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
      {testimonials.map((t, i) => (
        <div key={i} className="flex-none w-60 p-3 border border-gray-100 rounded-xl shadow-sm bg-white">
          <div className="flex text-amber-400 mb-1">
            {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <p className="text-gray-700 text-xs mb-1">"{t.text}"</p>
          <p className="font-semibold text-[10px] text-gray-900">- {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);
