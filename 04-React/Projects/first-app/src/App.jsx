import React from 'react'
import './App.css'

function App() {
 

  return (
    //Without jsx
    // React.createElement("div",{id:"wrap"},"This is wrapper box",React.createElement("h1",null,"This is h1 in wrapper box",React.createElement("h2",{id:"h2Title"},"This is h2 title from h2")))
    

    //with jsx
    <div id="wrap">
      <h1>This is h1 inside wrapper box</h1>
    </div>


    

  )
}

export default App
