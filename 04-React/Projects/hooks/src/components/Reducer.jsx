import React, { useReducer } from 'react'
const init = 0;

const reduce = (state,action) =>{
    //state--previous value(count)
    //action --- when want to do something operation with the state(count)
    switch(action){
        case "increment" : return state + 1;
        break;
        case "decrement" :
           (state <= 0) ?  console.log("Not allowed") : console.log("Done");
           
            
             return (state < 1)? 0 : state - 1;
        ;
        break;
        case "Reset" : return 0;
        break;
        default : console.log("Invalid Operation");
        
    }
}
function Reducer() {
    const[count,dispatch] = useReducer(reduce,init)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={()=>dispatch("increment")}> ➕ </button>
        <button onClick={()=>dispatch("decrement")}> ➖ </button>
        <button onClick={()=>dispatch("Reset")}>🔄</button>
    </div>
  )
}

export default Reducer