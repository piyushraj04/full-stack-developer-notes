import React, { useEffect, useState } from 'react'

function EmptyDepArr() {
    console.log("Rendered-->Empty Dependency Array");
    useEffect(()=>{
        console.log("✅ Only once");
    },[])
  return (
    <div>
        <h1>Empty Dependency Array</h1>

    </div>
  )
}

export default EmptyDepArr