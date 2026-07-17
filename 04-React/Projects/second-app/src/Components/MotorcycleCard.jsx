import React from 'react'

function MotorcycleCard({bikeInfo}) {
    const {img,modelName,engineCapacity,isAppConnected} = bikeInfo;
  return (
    <div className='empCard'>
        <img src={img} alt="" />
        <h1> Model :- {modelName}</h1>
        <h2> CC :- {engineCapacity}</h2>
        <h3>status :- {(isAppConnected)?"Connected to mobile app" : "Offline"}</h3>
        
    </div>
  )
}

export default MotorcycleCard