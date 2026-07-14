import React from 'react'
import './App.css'
import FirstFunc from './Components/FunctionalComp'

function App() {
 
  const user = "Piyush"
  let myStyle = {
    color:"indigo",
    fontSize:"4.5rem"
  }

  return (
    //Without jsx
    // React.createElement("div",{id:"wrap"},"This is wrapper box",React.createElement("h1",null,"This is h1 in wrapper box",React.createElement("h2",{id:"h2Title"},"This is h2 title from h2")))
    

    //with jsx
    // <div id="wrap">
    //   {/* Attribute value as string literals */}
    //   <h1 className = "primary-heading">This is h1 inside wrapper box</h1>
  
    //    {/* Attribute value as js expression*/}
    //   <h2 style={{color:"red"}}>My name is {user}</h2>

    //   {/* Adding JS expression into jsx */}
    //     <p style={myStyle}>Addition of 10 + 5 id : {10+5}</p>


    // </div>

    //import child componenet here
    <FirstFunc/>

    

  )
}

export default App
