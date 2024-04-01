import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='title'>FashionFusion</h3>
      <ul>
        <li><a href="./">Home</a></li>
        <li><a href="">About</a></li>
     
        <li><a href="./signup">Sign Up</a></li>
        <li><a href="./login">Login</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
