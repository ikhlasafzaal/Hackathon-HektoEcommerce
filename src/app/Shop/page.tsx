"use client";
import React, { useState } from "react";
import { FaTh, FaList, FaSearchPlus, FaShoppingCart, FaHeart } from "react-icons/fa"; // For icons
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";


const Shop: React.FC = () => {
  const products = [
    { name: "Modern Chair", price: "$450", image: "/images/image 1170.png" },
    { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" },
    { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" },
    { name: "Leather Sofa", price: "$700", image: "/images/image 1173.png" },
    { name: "Modern Chair", price: "$450", image: "/images/image 1170.png" },
    { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" },
    { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" },
    { name: "Leather Sofa", price: "$700", image: "/images/image 1173.png" },
    { name: "Modern Chair", price: "$450", image: "/images/image 1170.png" },
    { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" },
    { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" },
    { name: "Leather Sofa", price: "$700", image: "/images/image 1173.png" },
    { name: "Modern Chair", price: "$450", image: "/images/image 1170.png" },
    { name: "Elegant Sofa", price: "$500", image: "/images/image 1171.png" },
    { name: "Table Lamp", price: "$100", image: "/images/image 1172.png" },
    { name: "Leather Sofa", price: "$700", image: "/images/image 1173.png" },
  ];

  const [viewStyle, setViewStyle] = useState("grid");

  return (
    <>
    <TopBar/>
    <Header/>

    <div className="bg-gray-50 min-h-screen">
      {/* Jumbotron Header */}
      <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Shop Grid Default
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Home / Pages / <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </header>

      {/* Main Section (Below Jumbotron) */}
      <main className="container mx-auto px-6 py-16">
        {/* Original Header Content Moved Below Jumbotron */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
          <div>
            <h1 className="text-1xl sm:text-3xl md:text-2xl font-bold text-blue-900 mb-4">
              Ecommerce Accessories and Fashion Items
            </h1>
            <p className="text-sm sm:text-base text-gray-500">About 9630 Results</p>
          </div>

          {/* Right Side Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            {/* Per Page Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Per page:</label>
              <input
                type="number"
                min="1"
                className="p-2 border rounded-md text-sm w-full sm:w-32"
                defaultValue="12"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select className="p-2 border rounded-md text-sm w-full sm:w-32">
                <option value="relevance">Relevance</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* View and Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewStyle("grid")}
                className={`p-2 rounded-md ${viewStyle === "grid" ? "bg-gray-200" : "bg-transparent"}`}
              >
                <FaTh className="text-gray-600" />
              </button>
              <button
                onClick={() => setViewStyle("list")}
                className={`p-2 rounded-md ${viewStyle === "list" ? "bg-gray-200" : "bg-transparent"}`}
              >
                <FaList className="text-gray-600" />
              </button>

              {/* Small Input Field */}
              <input
                type="text"
                className="p-2 border rounded-md text-sm w-full sm:w-32"
              />
            </div>
          </div>
        </div>

        {/* Product Grid or List */}
        <div
          className={`grid ${
            viewStyle === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-8`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-md p-4 text-center relative group overflow-hidden transition-all duration-300 hover:bg-purple-100"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain rounded-lg group-hover:scale-110 transition-all duration-300"
              />

              {/* Product Name (Left Bottom) */}
<h3 className="absolute bottom-3 left-4 text-md font-semibold text-gray-800 group-hover:text-purple ml-6transition-all duration-300 sm:ml-6">
  {product.name}
</h3>

{/* Price and Sale Percentage (Right Bottom) */}
<div className="absolute bottom-3 right-4 text-sm text-gray-600 group-hover:text-purple transition-all duration-300 sm:mt-0 mt-12">
  <span>{product.price}</span> <span className="text-red-500">-15%</span>
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
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Shop;
