import React from "react";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa";
import Image from "next/image"; // Import the Image component

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly.",
    imgSrc: "/images/b2.png", // Path to the image
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly.",
    imgSrc: "/images/b1.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description:
      "More of this less hello samlande lied much over tightly circa horse taped mightly.",
    imgSrc: "/images/b3.png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-60 w-full">
              <Image
                src={post.imgSrc}
                alt={post.title}
                layout="fill" // Ensures the image covers the container
                objectFit="cover" // Maintains aspect ratio
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                {/* Author Icon */}
                <div className="flex items-center gap-1">
                  <FaPenNib className="text-gray-600" />
                  <span>{post.author}</span>
                </div>

                <span className="mx-1">•</span>

                {/* Date Icon */}
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-gray-600" />
                  <span>{post.date}</span>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <button className="text-blue-500 text-left hover:text-pink-500 underline mt-4 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
