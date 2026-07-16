import React from 'react'
import Logout from './Logout'

// function User(props) {
//   return (
//     <>
    
//     <p>Welcome {props.userName}</p>
    
//     <Logout userName={props.userName}/>
//     <hr />
//     </>

//   )
// }

function User(props) {
  return (
    <>
    
    <p>Welcome {props.userName}</p>
    
    <Logout userName={props.userName}/>
    <hr />
    </>

  )
}

export default User