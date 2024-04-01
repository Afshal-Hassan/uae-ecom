import './App.css';
import React from 'react';
import Home from './pages/home';
import EcomBar from './commons/ecom-bar/ecom-bar';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <EcomBar />
    </div>
  );
}

export default App;
