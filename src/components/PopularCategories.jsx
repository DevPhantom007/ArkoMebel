import React from "react";

function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: "Кухни",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300",
      link: "/category/kuhni"
    },
    {
      id: 2,
      name: "Спальни",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
      link: "/category/spalni"
    },
    {
      id: 3,
      name: "Гостиные",
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=300",
      link: "/category/gostinnye"
    },
    {
      id: 4,
      name: "Прихожие",
      image: "https://images.unsplash.com/photo-1558882224-dda1667334bb?w=300",
      link: "/category/prihozhie"
    },
    {
      id: 5,
      name: "Шкафы-купе",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300",
      link: "/category/shkafy-kupe"
    },
    {
      id: 6,
      name: "Детские",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=300",
      link: "/category/detskie"
    },
    {
      id: 7,
      name: "Диваны",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300",
      link: "/category/divany"
    },
    {
      id: 8,
      name: "Столы и стулья",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=300",
      link: "/category/stoly-i-stulya"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          ПОПУЛЯРНЫЕ КАТЕГОРИИ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={category.link}
              className="relative block overflow-hidden rounded-lg group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
              <h3 className="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-lg">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;