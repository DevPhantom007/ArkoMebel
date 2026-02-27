import React from "react";
import { Link } from 'react-router-dom';
import kitchenImg from "../images/kitchen.jpg";
import bedroomImg from "../images/bedroom.jpg";
import livingroomImg from "../images/livingroom.jpg";
import hallwayImg from "../images/hallway.jpg";
import wardrobeImg from "../images/wardrobe.png";
import kidsImg from "../images/kids.jpg";
import sofaImg from "../images/sofa.jpg";
import tablesImg from "../images/tables.jpg";

function Catalog() {
  const categories = [
    { id: 1, title: "КУХНИ", image: kitchenImg, slug: "kuhni" },
    { id: 2, title: "СПАЛЬНИ", image: bedroomImg, slug: "spalni" },
    { id: 3, title: "ГОСТИННЫЕ", image: livingroomImg, slug: "gostinnye" },
    { id: 4, title: "ПРИХОЖИЕ", image: hallwayImg, slug: "prihozhie" },
    { id: 5, title: "ШКАФЫ-КУПЕ", image: wardrobeImg, slug: "shkafy-kupe" },
    { id: 6, title: "ДЕТСКИЕ", image: kidsImg, slug: "detskie" },
    { id: 7, title: "ДИВАНЫ", image: sofaImg, slug: "divany" },
    { id: 8, title: "СТОЛЫ И СТУЛЬЯ", image: tablesImg, slug: "stoly-i-stulya" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          КАТАЛОГ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.slug}`} 
              key={category.id} 
              className="relative block overflow-hidden rounded-lg group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
              <h3 className="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-lg z-10">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;