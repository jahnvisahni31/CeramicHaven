import React, { useState } from "react";
import "./Navbar.css";
import logo from "/home/jahnvi/CeramicHaven/src/favicon.ico";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu , setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu=== "home"?"active":""}>
          <a href="#Home">Home</a>
        </li>
        <li onClick={()=>setMenu("Catalog")} className={menu=== "Catalog"?"active":""}>
          <a href="#Catalog">Catalog</a>
        </li>
        <li onClick={()=>setMenu("collections")} className={menu=== "collections"?"active":""}>
          <a href="#collections">All Collections</a>
        </li>
        <li onClick={()=>setMenu("contact")} className={menu=== "contact"?"active":""}>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
