import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Login  from './Login';
import FoodDelivery from './FoodDelivery';

function Ternary({name}) {
  const [isAuth,setIsAuth] = useState(true)
  function handleClick(){
    setIsAuth(!isAuth)

  }
   

    //using ternaryyyy
  // return (
  //   <>
  //   <button onClick={handleClick}>Inverse</button>
  //  { isAuth?<Dashboard name = {name}/>:<Login/>}
  //   </>
  // );

  // //using && operator
  // return (isAuth && <><h1>This is coming from server</h1>
  // <hr /> 
  // <button onClick={handleClick}>Inverse</button></>)

  //or operator
  // return (<h1> Hello {name || "Guest"} , Welcome to app...❤️🪴</h1>)

  //switch
  return (<FoodDelivery/>)
}

export default Ternary