import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
