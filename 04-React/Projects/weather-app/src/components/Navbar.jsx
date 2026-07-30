import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>
        Open<span>Weather</span>
      </h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
      </div>
    </nav>
  );
};


export default Navbar