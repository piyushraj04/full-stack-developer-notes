import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full'>
       {/* <h1 className='bg-red-600'>Hello Piyush Raj</h1> */}
       <Section1/>
       <Section2/>

    </div>
    
  )
}

export default App
