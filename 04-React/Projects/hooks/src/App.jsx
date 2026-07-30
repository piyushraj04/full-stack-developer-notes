import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Effect from './components/Effect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Effect/>
    <hr />
     <Counter/>
    </>
  )
}

export default App
