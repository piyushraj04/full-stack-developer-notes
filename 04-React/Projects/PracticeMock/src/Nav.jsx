import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">List</NavLink>
        
        <Link to="/check">Check</Link>
        <Link to="/products/:id">Products</Link>

        <Link to="/reducer">Reducer</Link>
    </div>
  )
}

export default Nav