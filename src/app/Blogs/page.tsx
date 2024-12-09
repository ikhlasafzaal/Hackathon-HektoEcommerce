import React from "react";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

const Blogs = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Jumbotron Header */}
        <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
          <div className="container mx-auto px-6 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Blogs
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Home / Pages / <span className="text-pink-500">Blogs</span>
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          {/* Main Blog Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Single Blog */}
              {["lb1", "lb2", "lb7"].map((img, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <Image
                    src={`/images/${img}.png`}
                    alt={`Blog Cover ${index + 1}`}
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <FaPenNib className="mr-2 text-purple-500" />
                      <span>Staff Author</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-500" />
                      <span>Aug 09 2020</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mt-4">
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum.
                  </p>
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-700 font-semibold mt-4 inline-block"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <input
                  type="text"
                  placeholder="Search for Posts"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-300"
                />
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Habits", count: 21 },
                    { name: "Women", count: 14 },
                    { name: "Health", count: 8 },
                    { name: "Fitness", count: 12 },
                  ].map((cat, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg text-center ${idx === 0 ? 'bg-pink-100' : 'bg-white'}`}
                    >
                      <h4 className="text-pink-500 font-semibold">{cat.name} ({cat.count})</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {["lb3", "lb4", "lb3"].map((post, index) => (
                    <div key={index} className="flex space-x-4">
                      <Image
                        src={`/images/${post}.png`}
                        alt={`Recent Post ${index + 1}`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="text-gray-600">
                          It is a long established fact.
                        </p>
                        <p className="text-gray-500 text-xs">Aug {index + 1} 2020</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sale Products */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Sale Products</h3>
                <div className="space-y-4">
                  {["lb5", "lb5"].map((sale, index) => (
                    <div key={index} className="flex space-x-4">
                      <Image
                        src={`/images/${sale}.png`}
                        alt={`Sale Product ${index + 1}`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="text-gray-600">It is a long established fact.</p>
                        <p className="text-gray-500 text-xs">Aug {index + 10} 2020</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offer Product */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Offer Product</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["o1", "o2", "o2", "o1"].map((product, index) => (
                    <div key={index} className="text-center">
                      <Image
                        src={`/images/${product}.png`}
                        alt={`Offer Product ${index + 1}`}
                        width={150}
                        height={150}
                        className="rounded-lg"
                      />
                      <p className="text-gray-800 mt-2">Product Name {index + 1}</p>
                      <p className="text-gray-500 text-sm">$12.00 - $15.00</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Follow</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-500">
                    <FaFacebookF className="text-2xl" />
                  </a>
                  <a href="#" className="text-pink-500">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-blue-400">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 text-sm text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Logos */}
        <div className="flex justify-center mt-12 mb-9 pb-6">
          <Image
            src="/images/login.png"
            alt="Logo"
            width={1200}
            height={1500}
            className="max-w-full h-auto mx-auto"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
