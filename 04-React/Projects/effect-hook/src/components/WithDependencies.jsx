import React, { useEffect, useState } from 'react'

function WithDependencies() {
    const[state,setState] =  useState(1)
    console.log("Rendered-->With Dependencies");
    function handleState(){
        setState(state+1);
    }
    useEffect(()=>{
       console.log(`✅Runs-First render--Whenever count changes----${state}`);
       document.title="ohhh--yeah"
    },[state])
  return (
    <div>
        <h1>With Dependencies</h1>
        <button onClick={handleState}>WithDepRender?</button>
    </div>
  )
}

export default WithDependencies