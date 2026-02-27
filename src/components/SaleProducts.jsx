import React from "react";

function SaleProducts() {
  const products = [
    {
      id: 1,
      name: "Ронда KPP1600.1",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300"
    },
    {
      id: 2,
      name: "Гранд шкаф верхний горизонтальный глубокий стекло 500",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300"
    },
    {
      id: 3,
      name: "Ронда KPP1600.1",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      discount: "-30%",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          ТОВАРЫ ПО АКЦИИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition flex flex-col h-full">
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded z-10">
                {product.discount}
              </span>

              <div className="flex justify-center items-center h-48 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-40 object-contain"
                />
              </div>

              <h3 className="text-gray-900 font-medium mb-2 line-clamp-2 flex-grow">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">{product.price}</span>
                <span className="text-xl font-bold text-gray-900">{product.oldPrice}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium mt-auto">
                КУПИТЬ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SaleProducts;