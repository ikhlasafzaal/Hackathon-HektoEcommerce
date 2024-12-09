"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="border-b-2 bg-neutral-100">
      {/* Header Container */}
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        <div className="w-full max-w-[1200px] flex items-center justify-between px-4 md:px-8 h-[50px]">
          {/* Logo */}
          <div>
          <Link href="/"> <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl md:text-2xl">
              Hekto
            </h2></Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[70%] md:w-auto bg-purple-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 items-center text-black">
              <li className="p-4 hover:text-pink-600">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:text-pink-600">
                <Link href="/AboutUs">About</Link>
              </li>
              <li className="p-4 hover:text-pink-600">
                <Link href="/Shop">Products</Link>
              </li>
              <li className="p-4 hover:text-pink-600">
                <Link href="/Blogs">Blog</Link>
              </li>
              <li className="p-4 hover:text-pink-600">
                <Link href="/ShopList">Shop</Link>
              </li>
              <li className="p-4 hover:text-pink-600">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex gap-x-4 items-center">
            <div className="hidden lg:flex bg-gray-200 rounded-md items-center w-[300px]">
              <input
                className="w-full p-2 rounded-l-md bg-gray-200 outline-none"
                type="search"
                placeholder="Search..."
              />
              <div className="bg-pink-600 flex items-center justify-center p-3 rounded-r-md">
                <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
              </div>
            </div>

            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
