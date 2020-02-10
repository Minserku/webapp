import React from 'react';
import Aeye from './img/Aeye.png';
import "./Menu.css";

function Menu(){
  return(
    <div className="menu">
      <ul>
        <li className="logo"><img src={Aeye} alt="AeyeLogo"></img></li>
        <li className="active"><a href="https://naver.com" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="https://github.com/Minserku" target="_blank" rel="noopener noreferrer">Service</a></li>
        <li><a href="https://github.com/Minserku" target="_blank" rel="noopener noreferrer">Product</a></li>
        <li><a href="https://github.com/Minserku" target="_blank" rel="noopener noreferrer">Contact</a></li>
        <li><a href="https://github.com/Minserku" className="signup-btn" target="_blank" rel="noopener noreferrer">SignUp</a></li>
      </ul>
    </div>
  );
}

export default Menu;