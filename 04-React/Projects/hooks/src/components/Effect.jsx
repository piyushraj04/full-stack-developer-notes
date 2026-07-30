import React, { useEffect, useState } from 'react'

function Effect() {
    const[num,setNum] = useState(0)
    function handleNum(){
        setNum(num+1);
    }
    useEffect(()=>{

    },[num])
  return (
    <div>
        <h1>Number - {num}</h1>
        <button onClick={handleNum}>Change</button>
        
    </div>
  )
}

export default Effect