import React from 'react';
import './App.css';
import BestSellers from './components/bestSellers';
import CarouselComp from './components/carouselComp';
import FeaturedProduct from './components/featuredProduct';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TopFragrance from './components/topFragrance';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='pt-16'>
      <CarouselComp />
      </div>
      
      <TopFragrance />
      <FeaturedProduct />
      <BestSellers />
      <Footer />   
    </div>
  );
}

export default App;
