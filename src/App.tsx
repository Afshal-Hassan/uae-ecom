import './App.css';
import React from 'react';
import Navbar from './commons/navbar/navbar';
import Hero from './pages/home/components/hero/hero';
import Brand from './pages/home/components/brand/brand';
import NewArrivals from './pages/home/components/new-arrivals/new-arrivals';
import Footer from './commons/footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
