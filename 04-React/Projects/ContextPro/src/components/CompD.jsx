import React, {useContext} from 'react'
import CompE from './CompE'
import { ThemeContext } from "../App"; // Adjust the path if needed


const CompD = () => {
    const color = useContext(ThemeContext);
  return (
    <div className='wrapper'>
         <h1>CompD</h1>
         {/* <h3>Theme : {theme}</h3>
        <CompE theme = {theme}/> */}
        {/* <h3>Theme (Hooks):--- {theme}</h3> */}
        <h2>Theme:-- {color}</h2>
        <CompE/>

    </div>
  )
}

export default CompD