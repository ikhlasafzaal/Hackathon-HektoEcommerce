import React from "react";
import { FaHeart, FaShoppingCart, FaSearchPlus } from "react-icons/fa"; // Import the icons

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = Array(8).fill({
    name: "Comfort Handy Craft",
    price: 42.0,
    originalPrice: 65.0,
    sale: true, // Toggle for showing the sale badge
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-10 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ name: "Modern Chair", price: "$450", image: "/images/image 1170.png" }, { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" }, { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" },{ name: "Modern Chair", price: "$450", image: "/images/image 1170.png" }, { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" }, { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" }].map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-md p-4 text-center relative group overflow-hidden transition-all duration-300 hover:bg-purple-100"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain rounded-xl group-hover:scale-110 transition-all duration-300"
              />

              {/* Product Name and Price (Single Line) */}
              <div className="flex justify-between items-center absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple">
                  {product.name}
                </h3>
                <div className="text-lg text-gray-600 group-hover:text-purple">
                  <span>{product.price}</span>{" "}
                  <span className="text-red-500">-15%</span>
                </div>
              </div>

              {/* Icons in Bottom Left on Hover */}
              <div className="absolute bottom-12 left-6 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaSearchPlus />
                </button>
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaShoppingCart />
                </button>
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
