import React from "react";
import { FaHeart, FaShoppingCart, FaSearchPlus } from "react-icons/fa"; // Import the icons
import Image from "next/image"; // Import the Image component if using Next.js

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-blue-900 text-left ml-5 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Comfort Chair",
            price: "$400",
            images: ["/images/image 3.png", "/images/image 3.png", "/images/image 3.png"],
          },
          {
            name: "Modern Sofa",
            price: "$600",
            images: ["/images/image 3.png", "/images/image 3.png", "/images/image 3.png"],
          },
          {
            name: "Stylish Lamp",
            price: "$150",
            images: ["/images/image 3.png", "/images/image 3.png", "/images/image 3.png"],
          },
          {
            name: "Desk Chair",
            price: "$250",
            images: ["/images/image 3.png", "/images/image 3.png", "/images/image 3.png"],
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-md p-4 text-center group relative overflow-hidden transition-all duration-300 hover:bg-purple-100"
          >
            {/* Icons in Top Left */}
            <div className="absolute top-4 left-4 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                <FaHeart />
              </button>
              <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                <FaShoppingCart />
              </button>
              <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                <FaSearchPlus />
              </button>
            </div>

            {/* Image Slider */}
            <div className="relative group">
              <div className="slider-container">
                <Image
                  src={product.images[0]}
                  width={300} // Adjust width based on your design
                  height={300} // Adjust height based on your design
                  className="w-full h-48 object-cover rounded-xl group-hover:opacity-75 transition-all duration-300"
                  alt="Product Image"
                  style={{ objectFit: "cover" }} // Ensures the image covers the area of the div without distortion
                />
              </div>
            </div>

            {/* Title, Three Dots, and Description */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-purple-600 transition-all duration-300">
                {product.name}
              </h3>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="text-gray-600"><b>•</b></span>
                <span className="text-gray-600"><b>•</b></span>
                <span className="text-gray-600"><b>•</b></span>
              </div>
              <p className="mt-2 text-lg text-purple-600 transition-all duration-300">
                {product.price}
              </p>
            </div>

            {/* Button and Hover Effect */}
            <div className="absolute bottom-0 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-[-15px] transition-all duration-300">
              <button className="bg-green-700 text-white py-4 px-6 rounded-md text-sm font-semibold hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
