import React, { useContext } from 'react'
import { userContext } from '../App'

function CheckContext() {
    const {user} = useContext(userContext);
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        
    </div>
  )
}

export default CheckContext