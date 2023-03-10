import React from "react";
import ProductCard from "../productCard";

const BestSellers = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col place-items-center text-dark py-24 bg-white gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Best Sellers</h1>
        <span className="underline">See all</span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellers;
