import React from "react";
import Image from "next/image";

function TopCategory() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-3xl font-bold font-sans text-left ml-9 title-font text-gray-900">
              Top Categories
            </h1>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-4 mb-20 group">
              <div className="h-auto flex flex-col items-center text-center relative">
                <Image
                  alt="Cantilever Chair"
                  className="rounded-full object-cover bg-gray-100"
                  src="/images/cat2.png"
                  width={350}
                  height={350}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#151875]">
                    Mini LCW Chair
                  </h2>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $56.00
                  </span>
                </div>

                {/* Shop Now Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-4 mb-20 group">
              <div className="h-auto flex flex-col items-center text-center relative">
                <Image
                  alt="Cantilever Chair"
                  className="rounded-full object-cover bg-gray-100"
                  src="/images/cat1.png"
                  width={350}
                  height={350}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#151875]">
                    Mini LCW Chair
                  </h2>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $56.00
                  </span>
                </div>

                {/* Shop Now Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-4 mb-20 group">
              <div className="h-auto flex flex-col items-center text-center relative">
                <Image
                  alt="Cantilever Chair"
                  className="rounded-full object-cover bg-gray-100"
                  src="/images/cat2.png"
                  width={350}
                  height={350}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#151875]">
                    Mini LCW Chair
                  </h2>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $56.00
                  </span>
                </div>

                {/* Shop Now Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-4 mb-20 group">
              <div className="h-auto flex flex-col items-center text-center relative">
                <Image
                  alt="Cantilever Chair"
                  className="rounded-full object-cover bg-gray-100"
                  src="/images/cat1.png"
                  width={350}
                  height={350}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#151875]">
                    Mini LCW Chair
                  </h2>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $56.00
                  </span>
                </div>

                {/* Shop Now Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-full">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopCategory;
