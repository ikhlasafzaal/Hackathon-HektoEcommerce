import React from "react";
import Image from "next/image";

function Subscribe() {
  return (
    <div className="relative">
      {/* Jumbotron Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/subscribe.png" // Replace with your image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 py-24 text-center text-blue">
        <h1 className="text-3xl font-bold mb-4 mt-8">
          Get Latest Update and Subscribe <br/> our NewsLetter
        </h1>
        <p className="text-1xl mt-6 mb-8">Stay up-to-date with our latest offers and updates.</p>
        
        {/* Show Now Button */}
        <button className="bg-pink-500 text-white py-3 px-6 rounded-md text-lg hover:bg-pink-600 transition">
  Shop Now
</button>

      </div>
    </div>
  );
}

export default Subscribe;
