import React from 'react';

const galleryItems = [
  { title: "Teeth Whitening", image: "/src/assets/images/whitening_no_text_1782732935718.jpg" },
  { title: "Dental Implants", image: "/src/assets/images/implant_v2_best_1782733279331.jpg" },
  { title: "Gap Closure", image: "/src/assets/images/gap_fix_v2_best_1782733300610.jpg" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">Before & After Results</h2>
      </div>
      <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-80 bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-md transition snap-center">
            <img src={item.image} alt={item.title} className="rounded-[1.25rem] w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
