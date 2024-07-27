import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css"; 
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/home"; 
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/Place_order/place_order";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> // Changed to uppercase
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} /> // Changed to uppercase
      </Routes>
    </div>
  );
}

export default App;