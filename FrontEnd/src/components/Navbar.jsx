import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../assets/react.svg"
const Navbar = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <nav className="navBar">
        <h1 className="logo"><img src={logo} className="logo-img"/>Techiversity</h1>
        
        <ul className="nav-links">
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-right">
          <button onClick={()=>setCount(count+1)}>login{count}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar

