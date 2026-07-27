import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Footer from './components/Footer'
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/footer" element = {<Footer/>}/>
     </Routes>
    </>
  )
}

export default App
