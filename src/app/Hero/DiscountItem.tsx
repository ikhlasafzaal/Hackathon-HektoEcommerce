import React from "react";
import Image from "next/image"; // Import the Image component if using Next.js

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-left">
          Discount Item
        </h1>

        {/* Content Container */}
        <div className="flex flex-wrap items-center gap-10">
          {/* Left Content */}
          <div className="flex-1">
            {/* Centered Links */}
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 mb-6">
              <span className="cursor-pointer hover:underline hover:text-pink-500 transition-colors duration-300">
                Wood Chair
              </span>
              <span className="cursor-pointer hover:underline hover:text-pink-500 transition-colors duration-300">
                Plastic Chair
              </span>
              <span className="cursor-pointer hover:underline hover:text-pink-500 transition-colors duration-300">
                Sofa Collection
              </span>
            </div>

            {/* Discount Details */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
              20% Discount On All Products
            </h3>
            <p className="text-gray-500 mb-6 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Bullet Points in Two Rows */}
            <ul className="grid grid-cols-2 gap-4 text-gray-500 text-left">
              <li className="flex items-center">
                <span className="text-green-500 font-bold text-lg mr-2">✔</span>
                Material expose like metals
              </li>
              <li className="flex items-center">
                <span className="text-green-500 font-bold text-lg mr-2">✔</span>
                Simple neutral colours
              </li>
              <li className="flex items-center">
                <span className="text-green-500 font-bold text-lg mr-2">✔</span>
                Clear lines and geometric figures
              </li>
              <li className="flex items-center">
                <span className="text-green-500 font-bold text-lg mr-2">✔</span>
                Material expose like metals
              </li>
            </ul>

            {/* Shop Now Button */}
            <button className="mt-8 bg-pink-500 pl-12 pr-12 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600 transition-colors duration-300">
              Shop Now
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <Image
              src="/images/discount.png"
              alt="Chair"
              width={500} // Set width based on your design
              height={500} // Set height based on your design
              className="rounded-full shadow-md w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
