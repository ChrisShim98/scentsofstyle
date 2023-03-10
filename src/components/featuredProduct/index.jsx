import React from "react";
import Perfume from "./perfume.png";

const FeaturedProduct = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-light flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={Perfume}
                  className="w-full relative z-10"
                  alt=""
                />
                <div className="border-4 border-[#d2b48c] absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  Mens's Spray <br />
                  Cologne
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...{" "}
                  <a
                    href="#"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">$</span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    45500
                  </span>
                  <span className="text-2xl leading-none align-baseline">.00</span>
                </div>
                <div className="inline-block align-bottom pt-4 md:pt-0">
                  <button className="bg-accent hover:bg-[#202020] text-light rounded-md px-10 py-2 font-semibold">
                    <i className="-ml-2 mr-2"></i> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
