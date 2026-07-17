import React from 'react'

function Logout({userName}) {
  return (
    <div className='logout'>
        <h3>{userName}, do you want to log out?</h3>
    <input type="submit"  value="logout"/>
    </div>
  )
}

export default Logout