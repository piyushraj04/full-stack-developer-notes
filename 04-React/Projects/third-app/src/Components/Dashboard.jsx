import React from 'react'

function Dashboard({name}) {
  return (
    <div>
        <div className="card">
          <h1>{name}</h1>
        </div>
         <div className="card">
          <h3>Mobile</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="card">
          <h3>City</h3>
          <p>Bangalore</p>
        </div>
        

        <div className="card">
          <h3>Status</h3>
          <p className="active">Active</p>
        </div>

    </div>
  )
}

export default Dashboard