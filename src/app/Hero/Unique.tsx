import React from 'react';
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";

function Unique() {
    return (
        <div>
            <section className="bg-sky-100 text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    {/* Image Section */}
                    <div className="md:w-1/3 flex justify-center items-center relative mb-8 md:mb-0">
                        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-5 shadow-xl mt-10 mx-auto">
                            <Image
                                src={"/images/u1.png"}
                                alt="Furniture Chair"
                                width={706}
                                height={689}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl w-full mb-4 font-bold text-gray-900 font-sans">
                            Unique Features Of Latest & <br className="hidden lg:inline-block" />
                            Trending Products
                        </h1>
                        <p className="mt-5 mb-4 leading-relaxed flex items-center justify-center md:justify-start">
                            <FaCircle className="text-[#FB2E86] mr-2" />
                            All frames constructed with hardwood solids and laminates
                        </p>
                        <p className="leading-relaxed flex items-center justify-center md:justify-start mb-4">
                            <FaCircle className="text-blue-500 mr-2" />
                            Reinforced with double wood dowels, glue, screw-nails corner
                            blocks and machine nails
                        </p>
                        <p className="leading-relaxed flex items-center justify-center md:justify-start mb-4">
                            <FaCircle className="text-green-600 mr-2" />
                            Arms, backs and seats are structurally reinforced
                        </p>

                        <div className="flex items-center justify-center mt-6">
    <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-[#fb2e91be] rounded text-lg">
        Add To Cart
    </button>
    <div className="ml-6 flex flex-col items-start">
        <h3 className="text-lg font-semibold">B&B Italian Sofa</h3>
        <p className="text-gray-600">$32.00</p>
    </div>
</div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Unique;
