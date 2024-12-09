"use client";
import React, { useState } from "react";
import { FaTh, FaList, FaSearchPlus, FaShoppingCart, FaHeart } from "react-icons/fa"; // For icons
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";
const ShopList: React.FC = () => {
  const products = [
    { 
      name: "Modern Chair", 
      price: "$450", 
      originalPrice: "$500", // Added original price
      image: "/images/s1.png", 
      description: "This modern chair is designed with sleek, minimalist aesthetics, featuring high-quality upholstery for comfort. Perfect for any contemporary living room or office space.",
      rating: 4 // Example rating (out of 5)
    },
    { 
      name: "Elegant Sofa", 
      price: "$500", 
      originalPrice: "$600", // Added original price
      image: "/images/s2.png", 
      description: "Our elegant sofa is crafted with luxurious materials that offer both comfort and style. It features plush cushions and a sturdy wooden frame, ensuring durability while providing a cozy seating experience.",
      rating: 5 // Example rating
    },
    { 
      name: "Elegant Sofa", 
      price: "$500", 
      originalPrice: "$600", // Added original price
      image: "/images/s4.png", 
      description: "Our elegant sofa is crafted with luxurious materials that offer both comfort and style. It features plush cushions and a sturdy wooden frame, ensuring durability while providing a cozy seating experience.",
      rating: 3 // Example rating
    },
    { 
      name: "Modern Chair", 
      price: "$450", 
      originalPrice: "$500", // Added original price
      image: "/images/s5.png", 
      description: "This modern chair is designed with sleek, minimalist aesthetics, featuring high-quality upholstery for comfort. Perfect for any contemporary living room or office space.",
      rating: 4 // Example rating
    },
    { 
      name: "Table Lamp", 
      price: "$100", 
      originalPrice: "$120", // Added original price
      image: "/images/s3.png", 
      description: "This stylish table lamp is designed to elevate the ambiance of any room. Featuring a modern base with an elegant shade, the lamp provides warm, ambient lighting perfect for reading, working, or creating a cozy atmosphere.",
      rating: 4 // Example rating
    },
  ];

  const [viewStyle, setViewStyle] = useState("grid");

  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-yellow-500 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>  
    <TopBar/>
    <Header/>

    
      <div className="bg-gray-50 min-h-screen">
      {/* Jumbotron Header */}
      <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Shop List
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Home / Pages / <span className="text-pink-500">Shop List</span>
          </p>
        </div>
      </header>

      {/* Main Section (Below Jumbotron) */}
      <main className="container mx-auto px-6 py-16">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ecommerce Accessories and Fashion Items
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              About 9630 Results
            </p>
          </div>

          {/* Right Side Controls */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
  <div className="flex items-center space-x-2">
    <label className="text-sm text-gray-600">Per page:</label>
    <input
      type="number"
      min="1"
      className="p-2 border rounded-md text-sm w-full sm:w-32"
      defaultValue="12"
    />
  </div>

  <div className="flex items-center space-x-4">
    <label className="text-sm text-gray-600">Sort by:</label>
    <select className="p-2 border rounded-md text-sm w-full sm:w-32">
      <option value="relevance">Relevance</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
      <option value="newest">Newest</option>
    </select>
  </div>

  <div className="flex items-center space-x-4">
    {/* Grid View Button */}
    <button
      onClick={() => setViewStyle("grid")}
      className={`p-2 rounded-md ${viewStyle === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    >
      <FaTh className="text-gray-600" />
    </button>

    {/* List View Button */}
    <button
      onClick={() => setViewStyle("list")}
      className={`p-2 rounded-md ${viewStyle === "list" ? "bg-green-500 text-white" : "bg-gray-200"}`}
    >
      <FaList className="text-gray-600" />
    </button>

    {/* Search Input */}
    <input
      type="text"
      className="p-2 border rounded-md text-sm w-full sm:w-32"
    />
  </div>
</div>

        </div>

        {/* Product List (Single Card Per Row) */}
        <div className="space-y-8">
  {products.map((product, index) => (
    <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
      {/* Left Column: Product Image */}
      <div className="w-full p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-contain rounded-lg"
        />
      </div>

      {/* Right Column: Product Content */}
      <div className="w-full p-4 flex flex-col justify-center items-start">
      <div className="flex justify-between items-center w-full">
  <h3 className="text-xl font-bold text-blue-900 text-left">{product.name}</h3>

  {/* Three Dots Button */}
  <div className="flex space-x-1"> {/* Added small margin to create space between heading and dots */}
    <span className="text-3xl text-red-500">•</span>  {/* First dot in red */}
    <span className="text-3xl text-green-500">•</span> {/* Second dot in green */}
    <span className="text-3xl text-blue-500">•</span>  {/* Third dot in blue */}
  </div>
</div>



        {/* Price and Sale Price */}
        <div className="text-lg text-gray-700 mt-2 text-left">
          <span className="line-through text-gray-500 mr-2">{product.originalPrice}</span>
          <span className="text-pink-500">{product.price}</span> {renderStars(product.rating)}
        </div>

        <p className="text-sm text-gray-500 mt-2 text-left">{product.description}</p>

        {/* Icons Row */}
        <div className="flex items-center space-x-4 mt-4 justify-start">
          <button className="text-gray-600 p-2 rounded-md hover:bg-gray-100">
            <FaShoppingCart />
          </button>
          <button className="text-gray-600 p-2 rounded-md hover:bg-gray-100">
            <FaHeart />
          </button>
          <button className="text-gray-600 p-2 rounded-md hover:bg-gray-100">
            <FaSearchPlus />
          </button>
        </div>
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

export default ShopList;
