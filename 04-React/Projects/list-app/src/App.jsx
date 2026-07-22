import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)
const students = ["Piyush","Gagan","Ravi","Vishal","Khushi","Chummi"];
// let allStuds = students.map((std)=>{
//   // console.log(std);
  
// })
  return (
    <>
    {/* <h1>List of Students in React</h1>
    <ul>
      {
        students.map((std)=>{
          return (
            <li>{std}</li>
          )

        })
      } */}

      {/* Type-02 */}

      {/* {
        students.map((item)=>{
          return <h1>Hello, this is {item} and i'm attending React class....</h1>
        })
      }
    </ul> */}

    <Product/>
    
    </>
  )
}

export default App
