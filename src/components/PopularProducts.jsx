import React from "react";
import kitchenImg from '../images/kitchen.jpg';
import livingroomImg from '../images/livingroom.jpg';
import sofaImg from '../images/sofa.jpg';
import wardrobeImg from '../images/wardrobe.png';
import bedroomImg from '../images/bedroom.jpg';
import hallwayImg from '../images/bedroom.jpg';
import kidsImg from '../images/kids.jpg';
import tablesImg from '../images/tables.jpg';

function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "Мори кровать KPM 900.1",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: bedroomImg
    },
    {
      id: 2,
      name: "Гостиная модульная Lucido",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: livingroomImg
    },
    {
      id: 3,
      name: "Ронда KPP1600.1",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: sofaImg
    },
    {
      id: 4,
      name: "Гранд шкаф верхний горизонтальный глубокий стекло 500",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: wardrobeImg
    },
    {
      id: 5,
      name: "Кухня Лондон модульная",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: kitchenImg
    },
    {
      id: 6,
      name: "Прихожая Виктория",
      price: "6 890 руб.",
      oldPrice: "4 823 руб.",
      discount: "-30%",
      image: bedroomImg
    },
    {
      id: 7,
      name: "Детская кровать Bambini",
      price: "8 450 руб.",
      oldPrice: "5 915 руб.",
      discount: "-30%",
      image: kidsImg
    },
    {
      id: 8,
      name: "Стол обеденный Амели",
      price: "5 230 руб.",
      oldPrice: "3 661 руб.",
      discount: "-30%",
      image: tablesImg
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Все товары →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition flex flex-col h-full">
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded z-10">
                  {product.discount}
                </span>
              )}
              
              <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow-md hover:bg-red-50 z-10">
                <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <div className="mb-4 pt-4 flex justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-40 object-contain"
                />
              </div>

              <h3 className="text-gray-900 font-medium mb-2 line-clamp-2 flex-grow">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">{product.price}</span>
                <span className="text-xl font-bold text-gray-900">{product.oldPrice}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium mt-auto">
                Добавить в избранное
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;