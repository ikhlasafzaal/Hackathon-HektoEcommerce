"use client";
import { FaHeart,FaInstagram,FaTwitter,FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function ProductDetail() {
    const categories = ["Description", "Additional information", "Reviews", "Videos"];
    const products = [
        {
          id: 1,
          name: "Women's Fashion Wear",
          image: "/images/rp1.png",
          rating: "⭐⭐⭐⭐⭐",
          price: "$450.99"
        },
        {
          id: 2,
          name: "Men's Casual Wear",
          image: "/images/rp2.png",
          rating: "⭐⭐⭐⭐",
          price: "$300.00"
        },
        {
          id: 3,
          name: "Sports Casual Wear",
          image: "/images/rp3.png",
          rating: "⭐⭐⭐⭐⭐",
          price: "$200.00"
        },
        {
          id: 4,
          name: "Summer Fashion Wear",
          image: "/images/rp4.png",
          rating: "⭐⭐⭐⭐",
          price: "$120.00"
        }
      ];
    return(
      <>
      <TopBar/>
      <Header/>
        <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
          <div className="container mx-auto px-6 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Product Details
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Home / Pages / <span className="text-pink-500">Product Details</span>
            </p>
          </div>
        </header>
        <div className="font-sans">
  <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
    <div className="w-full lg:sticky top-0 sm:flex gap-2">
  <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
    <img
      src="/images/pd2.png"
      alt="Product2"
      className="w-full cursor-pointer rounded-md"  // Adjusted height
    />
    <img
      src="/images/pd3.png"
      alt="Product3"
      className="w-full cursor-pointer rounded-md"
    />
    <img
      src="/images/pd4.png"
      alt="Product4"
      className="w-full cursor-pointer rounded-md"
    />
  </div>
  <img
  src="/images/pd1.png"
  alt="Product"
  className="w-4/5 h-100 rounded-md object-cover" // Adjusted height
/>
</div>


      <div>
        <h2 className="text-2xl font-bold text-gray-800">Playwood Arm Chair</h2>

        <div className="flex space-x-2 mt-4">
          <svg className="w-5 fill-pink-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-pink-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-pink-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-pink-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <h4 className="text-2xl font-bold text-gray-800">(22)</h4>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <p className="text-gray-800 text-xl font-bold">$12</p>
          <p className="text-gray-400 text-xl">
            <s>$16</s> <span className="text-sm ml-1.5">Tax included</span>
          </p>
        </div>

        <button
          type="button"
          className="mt-8 px-6 py-3 bg-white hover:bg-gray-200 text-black-700 text-sm font-semibold rounded-md flex items-center justify-center space-x-2 border border-white-600">
          <span>Add to cart</span>
          <FaHeart className="text-white-500 ml-2" /> {/* Heart icon */}
        </button>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Color</h3>
          <p className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
            A gray t-shirt is a wardrobe essential because it is so versatile. Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.
          </p>

          <h3 className="text-xl mt-6 mb-6 font-bold text-gray-800">Category</h3>
          <h3 className="text-xl mt-6 mb-6 font-bold text-gray-800">Tags</h3>

          <h3 className="text-xl font-bold text-gray-800">Share</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-blue-400">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-pink-600">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
          <div className="space-y-3 mt-4">
            <div className="flex items-center">
              <p className="text-sm text-gray-800 font-bold">5.0</p>
              <svg className="w-5 fill-pink-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                <div className="w-2/3 h-full rounded-md bg-pink-600"></div>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
            </div>

            <div className="flex items-center">
              <p className="text-sm text-gray-800 font-bold">4.0</p>
              <svg className="w-5 fill-pink-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                <div className="w-1/3 h-full rounded-md bg-pink-600"></div>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
            </div>

            <div className="flex items-center">
              <p className="text-sm text-gray-800 font-bold">3.0</p>
              <svg className="w-5 fill-pink-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                <div className="w-1/6 h-full rounded-md bg-pink-600"></div>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
            </div>

            <div className="flex items-center">
              <p className="text-sm text-gray-800 font-bold">2.0</p>
              <svg className="w-5 fill-pink-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                <div className="w-1/6 h-full rounded-md bg-pink-600"></div>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
                  {/* Categories */}
        <div className="flex justify-center space-x-6 mb-10 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>
                    <div className="ml-auto mr-auto mb-10 w-full max-w-4xl px-6">
            <h1 className="font-bold text-2xl mb-6 flex flex-wrap text-center">
                Varius Temper
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed mb-6 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi neque aperiam blanditiis impedit amet itaque in sed suscipit pariatur architecto incidunt, officiis iure obcaecati, dicta numquam rem cum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi neque aperiam blanditiis impedit amet itaque in sed suscipit pariatur architecto incidunt, officiis iure obcaecati, dicta numquam rem cum aliquam! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <h1 className="font-bold text-2xl mb-6 flex flex-wrap text-center">
                More Details
            </h1>
            
            {/* Bullet points with checkmarks and more details */}
            <ul className="list-inside list-disc text-sm text-gray-700 pl-6 space-y-4 text-center">
                <li className="flex items-start justify-center">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <div>
                    <strong>High-quality materials:</strong> This product is made from top-tier materials to ensure durability and long-lasting performance. It is designed to withstand wear and tear, making it a reliable choice for everyday use.
                </div>
                </li>
                <li className="flex items-start justify-center">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <div>
                    <strong>Versatile design:</strong> Whether you're decorating a living room, office, or bedroom, this product's design complements various interior styles, adding elegance and functionality to any space.
                </div>
                </li>
                <li className="flex items-start justify-center">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <div>
                    <strong>Comfortable and durable:</strong> Our product is designed with both comfort and longevity in mind. The soft, smooth finish makes it comfortable to use, while its durability ensures it will last for years.
                </div>
                </li>
                <li className="flex items-start justify-center">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <div>
                    <strong>Available in multiple sizes:</strong> We offer a range of sizes to suit your needs, whether you're looking for something compact or larger to fit your space perfectly.
                </div>
                </li>
            </ul>
            </div>

        </header>

        <div className="max-w-6xl mx-auto px-6">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-blue-800 text-left mb-6 mt-4">
        Related Products
      </h2>

      {/* Flex container to display the cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden font-[sans-serif] mt-4"
    >
      <div className="min-h-[280px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[280px] object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-800 text-md font-bold">{product.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">{product.rating}</span>
          </div>
        </div>
        <div className="text-md text-gray-800 font-semibold">
          Price: {product.price}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>

    <div className="flex justify-center mt-12 mb-9 pb-6">
  <Image
    src="/images/login.png"
    alt="logo"
    layout="intrinsic"
    width={1200}
    height={1500}
    className="max-w-full h-auto mx-auto"
  />
</div>


      </div>




<Footer/>
</>


    )
}