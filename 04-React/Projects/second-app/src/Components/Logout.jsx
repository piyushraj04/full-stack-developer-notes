import React from 'react'

function Logout(props) {
  return (
    <>
    <h3>{props.userName}, do you want to log out?</h3>
    <input type="submit"  value="logout"/>
    {/* <button>Logout</button> */}
    </>
  )
}

export default Logout