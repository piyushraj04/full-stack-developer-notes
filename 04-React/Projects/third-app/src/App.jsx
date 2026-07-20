import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CondRen1 from './Components/CondRen1'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product'

const product = {
  title : "Atomic Habits",
  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_7b6AGlF6ujjXflKlQ6oi_yX5g0GQAhhlEsFbTM6CjAOFuEGNi_2QZA&s=10",
  price : 350,
  rating : 4.8
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CondRen1/> */}
      <Product props = {product}/>
    </>
  )
}

export default App
