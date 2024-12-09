import React from "react";
import Image from "next/image";
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

const AboutUs: React.FC = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
          <div className="container mx-auto px-6 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About Us
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Home / Pages / <span className="text-pink-500">About Us</span>
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/a1.png"
              alt="About our Ecommerce Business"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are committed to providing the best shopping experience with
              quality products, fast delivery, and excellent customer service.
              Learn more about our history and how we have grown over the years.
            </p>
            <a
              href="#"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-center text-3xl font-bold mb-12">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Feature Card */}
              {[
                { title: "Free Delivery", icon: "🚚", description: "Get your products delivered for free" },
                { title: "Win Cash Back", icon: "💸", description: "Earn cashback on every purchase" },
                { title: "Quality Product", icon: "✔️", description: "Only the highest quality products" },
                { title: "24/7 Support", icon: "📞", description: "We're here for you anytime" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{feature.description}</p>

                  {/* Two lines below the feature */}
                  <div className="mt-4">
                    <div className="border-t-2 border-gray-300 mb-2"></div>
                    <div className="border-t-2 border-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Clients Say!</h2>
            <div className="mt-8 mb-6">
              <Image
                src="/images/a6.png"
                alt="Client testimonial"
                width={150}
                height={150}
                className="mx-auto rounded-full object-cover"
              />
            </div>
            <blockquote className="ml-6 mr-6 bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700">
                "I have had an amazing experience shopping with this platform.
                Their customer service is top-notch, and the products are
                always of excellent quality. Highly recommended!"
              </p>
              <footer className="mt-4 text-gray-600 font-bold">- Fatima Khan</footer>
            </blockquote>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
