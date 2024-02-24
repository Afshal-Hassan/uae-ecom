import './App.css';
import React from 'react';
import Navbar from './commons/components/navbar/navbar';
import Hero from './pages/home/components/hero/hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
