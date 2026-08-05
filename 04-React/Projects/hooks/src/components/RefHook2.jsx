import React, { useRef, useState } from 'react'

function RefHook2() {
    const[num,setNum] = useState(0);
    const myRef = useRef(num);
    const vidRef = useRef(null);
    console.log(myRef);
    const handleRef = () =>{
        myRef.current++;
        console.log(myRef.current);
        setNum(myRef.current);
    }

    const handlePlay = () => {
        vidRef.current.play()
    }
    
  return (
    <div>
        <video src="https://www.pexels.com/download/video/38839632/"
        ref={vidRef}
        loop
        ></video>
        <button onClick={handlePlay}>Play</button>
        <button>Pause</button>
    </div>
  )
}

export default RefHook2