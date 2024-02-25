import './App.css';
import React from 'react';
import Navbar from './commons/navbar/navbar';
import Hero from './pages/home/components/hero/hero';
import Brand from './pages/home/components/brand/brand';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
    </div>
  );
}

export default App;
