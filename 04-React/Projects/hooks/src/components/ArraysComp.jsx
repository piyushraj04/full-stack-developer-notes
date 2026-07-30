import React, { useState } from 'react'

const ArraysComp = () => {
    const[skills,setSkills] = useState(["Java","SQL","Spring","CSS","JavaScript"]);
    const handleSkill = () => {
        setSkills([...skills,"React","Devops"])
    }
  return (
    <div>
        <h1>{`${skills}`}</h1>
        <button onClick={handleSkill}>Update</button>
        
    </div>
  )
}

export default ArraysComp