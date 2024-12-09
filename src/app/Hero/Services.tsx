import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";

function Services() {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
          What Shopex Offer!
        </h1>
      </div>

      <div className="w-full mb-9 flex justify-center items-center">
      <div className="w-full sm:w-full lg:w-[80%] flex flex-col sm:flex-col lg:flex-row justify-center gap-8 sm:gap-6 lg:gap-4">
  {/* Box1 */}
  <div className="w-full sm:w-[260px] lg:w-[260px] h-[200px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-6 rounded-lg shadow-lg">
    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
      <CiDeliveryTruck className="text-3xl" />
    </div>
    <div className="font-bold text-center">
      <h1 className="mb-3 text-lg">24/7 Support</h1>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  </div>

  {/* Box2 */}
  <div className="w-full sm:w-[260px] lg:w-[260px] h-[200px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-6 rounded-lg shadow-lg">
    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
      <CiDeliveryTruck className="text-3xl" />
    </div>
    <div className="font-bold text-center">
      <h1 className="mb-3 text-lg">Free Shipping</h1>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  </div>

  {/* Box3 */}
  <div className="w-full sm:w-[260px] lg:w-[260px] h-[200px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-6 rounded-lg shadow-lg">
    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
      <BsHeadset className="text-3xl" />
    </div>
    <div className="font-bold text-center">
      <h1 className="mb-3 text-lg">Customer Support</h1>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  </div>

  {/* Box4 */}
  <div className="w-full sm:w-[260px] lg:w-[260px] h-[200px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-6 rounded-lg shadow-lg">
    <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
      <FaCheckToSlot className="text-3xl" />
    </div>
    <div className="font-bold text-center">
      <h1 className="mb-3 text-lg">Quality Assurance</h1>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Services;
