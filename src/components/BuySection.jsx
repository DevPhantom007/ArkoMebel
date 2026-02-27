import React from "react";

function BuySection() {
  const products = [
    {
      id: 1,
      name: "Гостиная модульная Lucido",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      sizes: "1635 мм 650 мм 2032 мм",
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=300"
    },
    {
      id: 2,
      name: "Гостиная модульная Lucido",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=300"
    },
    {
      id: 3,
      name: "Кухня Лондон модульная",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      unit: "м/п",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300"
    },
    {
      id: 4,
      name: "Кухня Лондон модульная",
      price: "7 159 руб.",
      oldPrice: "5 017 руб.",
      unit: "м/п",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
              <div className="text-sm text-gray-500 mb-2">КУПИТЬ</div>
              
              {product.sizes && (
                <div className="text-sm text-gray-600 mb-2">
                  Размеры: {product.sizes}
                </div>
              )}

              <div className="flex justify-center items-center h-32 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-28 object-contain"
                />
              </div>

              <h3 className="text-gray-900 font-medium mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">{product.price}</span>
                <span className="text-xl font-bold text-gray-900">
                  {product.oldPrice} {product.unit}
                </span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium mt-auto">
                КУПИТЬ
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium">
            Показать еще
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuySection;