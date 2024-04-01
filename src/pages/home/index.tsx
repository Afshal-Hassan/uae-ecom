import React from 'react'
import Hero from './components/hero/hero';
import Brand from './components/brand/brand';
import Navbar from '../../commons/navbar/navbar';
import Footer from '../../commons/footer/footer';
import NewArrivals from './components/new-arrivals/new-arrivals';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default Home;