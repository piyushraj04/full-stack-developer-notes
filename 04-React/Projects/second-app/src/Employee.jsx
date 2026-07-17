import React from 'react'

function Employee({emp}) {
    const {img, name, desg} = emp
  return (
    <div className='empCard'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>{desg}</h3>
    </div>
  )
}

export default Employee