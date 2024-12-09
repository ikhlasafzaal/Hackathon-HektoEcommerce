import React from "react";
import Image from "next/image"; // Importing the Next.js Image component
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

const Contact: React.FC = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
          <div className="container mx-auto px-6 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Home / Pages / <span className="text-pink-500">Contact</span>
            </p>
          </div>
        </header>

        {/* Main Section */}
        <main className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Information About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn more about our services and how we can help. We’re always
                here to answer your questions and provide the best solutions for
                your needs.
              </p>
              <div className="flex gap-4">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Way</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <li className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white rounded-full mr-4"></span>
                  <div>
                    <h3 className="font-light fon-small">Tel:877-67-88-99</h3>
                    <p className="text-gray-600">E-mail:shop@store.com</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4"></span>
                  <div>
                    <h3 className="font-medium">20Margarent st, London</h3>
                    <p className="text-gray-600">Great britian,3NM98-LK</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full mr-4"></span>
                  <div>
                    <h3 className="font-medium">Support Forum</h3>
                    <p className="text-gray-600">For Over 24hr</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full mr-4"></span>
                  <div>
                    <h3 className="font-medium">Free Standard Shipping</h3>
                    <p className="text-gray-600">on all orders.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Feel free to drop us a line or send us an email. We’d love to hear
                from you and will respond as quickly as possible.
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Type Your Message"
                    rows={5}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/contact.png"
                alt="Contact Illustration"
                width={500} // Adjust the width as needed
                height={500} // Adjust the height as needed
                className="w-full max-w-md"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
