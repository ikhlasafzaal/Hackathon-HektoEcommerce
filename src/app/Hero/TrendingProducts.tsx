import React from "react";

const products = [
  {
    id: 1,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/images/t9.png",
  },
  {
    id: 2,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/images/t10.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$90.00",
    img: "/images/t9.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/images/t10.png",
  },
];

function TrendingProducts() {
  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col text-left w-full mb-12">
          <h1 className="text-3xl font-bold text-blue-900">
            Trending Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="rounded-lg w-full h-60 object-cover mb-4"
              />
              {/* Product Name */}
              <h2 className="text-black font-medium text-lg mb-2 ml-12">
                {product.name}
              </h2>
              {/* Pricing */}
              <div className="text-[#151875] text-sm flex justify-center gap-2 ">
                <span>{product.price}</span>
                <span className="line-through text-black">
                  {product.oldPrice}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;