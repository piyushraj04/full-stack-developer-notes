import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoDepArr from './components/NoDepArr'
import EmptyDepArr from './components/EmptyDepArr'
import WithDependencies from './components/WithDependencies'

function App() {
  const [count, setCount] = useState(0)
  function handleCount(){
    setCount(count+1);
  }
 useEffect(()=>{
  document.title= `React-App ${count}`
 })
  
  return (
    <>
      {/* <NoDepArr/> */}
      <hr />
      {/* <EmptyDepArr/> */}
      <hr />
      <WithDependencies/>
      <hr />
      <h1>{count}</h1>
      <button onClick={handleCount}>Render???</button>
      <hr />
    </>
  )
}

export default App
