import React from 'react'

function Card({user,age,img}) {
  return (
    <div className="card">
        <img src={img} alt="" />
        <h1>{user}</h1>
        <h2>{age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsum?</p>
        <button>Submit  </button>
      </div>
  )
}

export default Card