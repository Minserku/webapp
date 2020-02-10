import React from 'react';
import Menu from './component/Menu';
import Banner from './component/Banner';
import Quicklinks from './component/Quicklinks';
import './App.css';

function App() {
  return (
    <div className="container">
      <Menu></Menu>
      <Banner></Banner>
      <Quicklinks></Quicklinks>
    </div>
  );
}

export default App;
