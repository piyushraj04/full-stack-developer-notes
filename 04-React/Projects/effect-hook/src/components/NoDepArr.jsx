import React, { useEffect } from 'react'

function NoDepArr() {
    console.log("Rendered-->Without Dependency Array");
    useEffect(()=>{
        console.log("✅ After every render");
        
    })
    
  return (
    <div>
        <h1>No Dependency array</h1>
    </div>
  )
}

export default NoDepArr