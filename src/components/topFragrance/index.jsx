import React from "react";
import Perfume from "./perfume.png";

const TopFragrance = () => {
  return (
    <div className="md:h-screen min-h-screen w-screen flex flex-col place-items-center text-dark py-24 bg-white">    
      <div className="grid place-items-center justify-center h-full">
      <h1 className="text-3xl font-medium">Top Cologne Brands</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-center pt-8 lg:pt-0">
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Dolce y Gabbana</h1>
          </div>
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Calvin Klein</h1>
          </div>
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Montblanc</h1>
          </div>
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Dolce y Gabbana</h1>
          </div>
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Calvin Klein</h1>
          </div>
          <div className="flex place-items-center justify-center bg-light w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out">
            <img src={Perfume} className="h-32" alt="" />
            <h1>Montblanc</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFragrance;
