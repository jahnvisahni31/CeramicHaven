import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // Import icons
import "./Navbar.css";
import logo from "/home/jahnvi/CeramicHaven/src/favicon.ico"; 
import CatalogPage from "../../pages/Catalog/CatalogPage"; 


const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <a href="#Home">Home</a>
        </li>
        <li onClick={() => setMenu("Catalog")} className={menu === "Catalog" ? "active" : ""}>
          <a href="CatalogPage">Catalog</a>
        </li>
        <li onClick={() => setMenu("collections")} className={menu === "collections" ? "active" : ""}>
          <a href="#collections">All Collections</a>
        </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <FiSearch className="navbar-search-icon" size={20} /> {/* Search Icon */}
        <div className="navbar-basket-icon">
          <FiShoppingCart size={20} /> {/* Cart Icon */}
          <div className="dot"></div> {/* Notification dot for the cart */}
        </div>
        <button className="sign-in-button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
