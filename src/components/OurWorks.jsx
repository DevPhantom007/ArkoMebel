import React from "react";
import kitchenImg from '../our-works/kitchen.png';
import livingroomImg from '../our-works/livingroom.png';
import Ameli from '../our-works/ameli.png';
import London from '../our-works/london.png';

function OurWorks() {
  const works = [
    { id: 1, name: "КУХНЯ ГЛЕТЧЕР", image: kitchenImg },
    { id: 2, name: "ГОСТИННАЯ ДЕНВЕР", image: livingroomImg },
    { id: 3, name: "КУХНЯ АМЕЛИ", image: Ameli },
    { id: 4, name: "КУХНЯ ЛОНДОН", image: London }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          НАШИ РАБОТЫ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work) => (
            <div key={work.id} className="relative overflow-hidden rounded-lg shadow-md group">
              <img 
                src={work.image} 
                alt={work.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold text-lg">{work.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorks;