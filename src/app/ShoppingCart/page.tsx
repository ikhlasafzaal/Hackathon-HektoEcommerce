"use client";
import React, { useState } from "react";
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Stylish Golden Bag",
      image: "/images/c1.png",
      color: "Golden",
      size: "Medium",
      quantity: 2,
      price: 120.0,
    },
    {
      id: 2,
      name: "Stylish Smart Bag",
      image: "/images/c2.png",
      color: "Silver",
      size: "Large",
      quantity: 1,
      price: 70.0,
    },
    {
      id: 1,
      name: "Stylish Golden Bag",
      image: "/images/c3.png",
      color: "Golden",
      size: "Medium",
      quantity: 2,
      price: 120.0,
    },
    {
      id: 2,
      name: "Stylish Smart Bag",
      image: "/images/c4.png",
      color: "Silver",
      size: "Large",
      quantity: 1,
      price: 70.0,
    },
  ]);

  const [shippingDetails, setShippingDetails] = useState({
    city: "",
    country: "",
    postalCode: "",
  });

  const incrementQuantity = (id: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleShippingChange = (e: any) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>  
    <TopBar/>
    <Header/>
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-4 sm:py-6 md:py-8 bg-cover bg-center relative">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Home / Pages / <span className="text-pink-500">Shopping Cart</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Table */}
          <div className="lg:col-span-2">
  {/* Wrapper to make table scrollable on smaller screens */}
  <div className="overflow-x-auto">
    <table className="table-auto min-w-full text-left bg-white shadow-md rounded-md">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="border-b">
            <td className="px-4 py-4 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </td>
            <td className="text-sm px-4 py-4">${item.price.toFixed(2)}</td>
            <td className="px-4 py-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="text-sm px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="text-sm px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </td>
            <td className="text-sm px-4 py-4">
              ${(item.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Buttons Section */}
  <div className="flex justify-between mt-4 text-sm">
    <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-blue-700">
      Update Cart
    </button>
    <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-red-700">
      Clear Cart
    </button>
  </div>
</div>


          {/* Right Side */}
          <div className="space-y-8">
            {/* Cart Total */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800">Cart Total</h2>
              <div className="bg-gray-100 p-4 shadow-md rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 mb-4">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="text-sm w-full bg-green-600 text-white py-2 rounded">
                  Proceed to Checkout
                </button>
                {/* Bullet Point */}
                <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <span>Shopping and taxes are calculated at checkout.</span>
                </div>
              </div>
            </div>

            {/* Calculate Shipping */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800">Calculate Shipping</h2>
              <div className="bg-gray-100 p-4 shadow-md rounded-md">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingDetails.city}
                    onChange={handleShippingChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={shippingDetails.country}
                    onChange={handleShippingChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={shippingDetails.postalCode}
                    onChange={handleShippingChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <button className="text-sm mt-4 w-full bg-pink-600 text-white py-2 rounded">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShoppingCart;
