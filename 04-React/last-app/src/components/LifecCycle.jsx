import React, { useEffect, useState } from 'react'

function LifecCycle() {
    const[cnt,setCnt]=useState(0);
    useEffect(()=>{
        console.log("Mounted");
        return () => {
            //cleanup logic
        }
        
    },[])

    const handleCnt = () => {
        setCnt(cnt+1);
    }
  return (
    <div>
        <h1 className='piyushhh'>{cnt}</h1>
        <button onClick={handleCnt}>Click</button>
    </div>
  )
}

export default LifecCycle