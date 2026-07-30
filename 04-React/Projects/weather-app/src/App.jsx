import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/weather" element={<Weather/>} />
     </Routes>
    </>
  )
}

export default App
