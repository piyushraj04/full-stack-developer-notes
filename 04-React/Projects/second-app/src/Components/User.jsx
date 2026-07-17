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

function User({userName = "Guest",message = "have a nice day...❤️👋"}) {
  return (
    <>
    <div className='card'>
      <p>Welcome {userName}</p>
    <p>{message}</p>
    </div>
    <Logout userName= {userName}/>
    </>

  )
}

export default User