import React, { useState } from 'react'

function TheTrafficLight() {
    const [color,setColor] = useState("Red");
    const handleColorChangeRed = () => {
        setColor("Red");
    }
     const handleColorChangeYellow = () => {
        setColor("Yellow");
    }
     const handleColorChangeGreen = () => {
        setColor("Green");
    }

  return (
    <>
    <h1>Current Color: {color}</h1>
    <hr />
    <button onClick={handleColorChangeRed}>🔴 Red</button>
    <button onClick={handleColorChangeYellow}>🟡 Yellow</button>
    <button onClick={handleColorChangeGreen}>🟢 Green</button>
    </>
  )
}

export default TheTrafficLight