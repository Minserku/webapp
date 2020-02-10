import React from 'react';
import "./Quicklinks.css";

function Quicklinks(){
  return(
    <div className="quick-links">
      <ul>
        <li><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><p>FACEBOOK</p></a></li>
        <li><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><p>TWITTER</p></a></li>
        <li><a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><p>LINKEDIN</p></a></li>
        <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i><p>INSTAGRAM</p></a></li>
      </ul>
    </div>
  );
}

export default Quicklinks;