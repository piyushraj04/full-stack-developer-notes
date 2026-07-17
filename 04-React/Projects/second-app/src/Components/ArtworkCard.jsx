import React from 'react'

const ArtworkCard = ({artInfo}) => {
  let {title,price,isOriginal,medium} = artInfo;
  return (
    <div className='empCard'>
      <h1>Title : {title}</h1>
      <h2>Price : {price}</h2>
      <h3>{(isOriginal)?"🪴Original painting" : "ArtPrint"}</h3>
      <h3>Medium : {medium}</h3>
     
    </div>
  )
}

export default ArtworkCard
