import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './Components/User'
import Employee from './Employee'
import MotorcycleCard from './Components/MotorcycleCard'
import ArtworkCard from './Components/ArtworkCard'
import State from './Components/State'
import TheLightSwitch from './Components/TheLightSwitch'
import TheLightFun from './Components/TheLightFun'
import TheGreetingCard from './Components/TheGreetingCard'
import TheTrafficLight from './Components/TheTrafficLight'

const emp = {
  name : "Piyush",
  desg : "Software Engineer",
  img : "https://img.magnific.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80"
}

const bikeInfo = {
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-nHar-57S-5KLKTx0rJhRcbmFsrHcIArWQmbLgj9y1sR9m765MJrWKs&s=10",
  modelName : "Dominar 400",
  engineCapacity : 400,
  isAppConnected : true
}
const bikeInfo2 = {
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaGNhiP5csJ709D9jZriIU1sxvb3Wifwb5jDIssk1sQ&s=10",
  modelName : "Royal Enfield",
  engineCapacity : 350,
  isAppConnected : false
}
const artInfo = {
  title : "Mithila painting",
  price : 250,
  isOriginal : true,
  medium : "Oil on Canvas"
}
const artInfo2 = {
  title : "Mithila art",
  price : 550,
  isOriginal : false,
  medium : "Watercolor"
}
function App() {

  const [count, setCount] = useState(0)

  return (
    
    <div className='mainCom'>
      <TheLightFun/>
      <hr />

      <TheGreetingCard/>
      <hr />

      <TheTrafficLight/>

      {/* <State/> */}
    {/* <MotorcycleCard bikeInfo = {bikeInfo}/>
    <MotorcycleCard bikeInfo = {bikeInfo2}/> */}
    {/* <ArtworkCard artInfo = {artInfo}/>
    <ArtworkCard artInfo = {artInfo2}/> */}

      
      {/* <Employee emp = {emp}/>
      <Employee emp = {emp}/>
      <Employee emp = {emp}/> */}
    </div>
    // <>
    // <User userName = "Piyush" message = "Good Evening"/>
    // <User userName = "Vishal" message = "Good Morning"/>
    // <User userName = "Ravi Ji" message = "Good Night"/>
    // <User/>
    // </>
  )
}

export default App
