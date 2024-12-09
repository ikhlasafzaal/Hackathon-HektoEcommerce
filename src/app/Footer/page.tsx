import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#f5f7fa]">
        <div className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* First Column: Subscribe */}
      <div className="w-full px-4">
  <h2 className="font-bold text-gray-900 text-2xl mb-4">Hekto</h2>
  <div className="flex items-center">
    <input
      type="search"
      className="w-2/3 h-12 text-sm px-4 text-gray-700 bg-white border border-gray-300 rounded-l-md outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#FB2E86] transition duration-300"
      placeholder="Search"
    />
    {/* Sign Up Button */}
    <button className="w-1/3 h-12 bg-[#FB2E86] text-white text-sm rounded-r-md hover:bg-[#e12b77] transition duration-300">
      Subscribe
    </button>
  </div>
  <p className="text-sm text-gray-500 mt-2">
    Subscribe for the latest updates and offers.
  </p>
</div>




          {/* Second Column: Categories */}
          <div className="w-full px-4">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Cameras & Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Smart Phones & Tablets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Video Games & Consoles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Waterproof Headphones
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Customer Care */}
          <div className="w-full px-4">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Discount
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Orders History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Pages */}
          <div className="w-full px-4">
            <h3 className="font-bold text-gray-900 text-2xl mb-4">Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Browse the Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pre-Built Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Visual Composer Elements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  WooCommerce Pages
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#f5f7fa]">
          <div className="container mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © Webeco - All Rights Reserved
            </p>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
