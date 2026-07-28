import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/footer">Unknown</Link>
    </div>
  )
}

export default Navbar