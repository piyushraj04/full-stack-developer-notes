import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
