import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function Product({props}) {
  const [isloaded, setIsLoaded] = useState(false);

  const { title, image, price, rating } = props;
  function handleClick(){
    setIsLoaded(!isloaded);
  }
  
  if (isloaded) {
    return (
      <>
      <button onClick={handleClick}>Load</button>
      <hr />
        <div className="prod">
          <img src={image} alt="" />
          <h1>{title}</h1>
          <h2>{price}</h2>
          <h2>{rating}</h2>
        </div>
        
      </>
    );
  } else {
    
    return (
      <>
        <button onClick={handleClick}>Loaded</button>
        <hr />
        <Spinner animation="grow" />
      </>
    );
  }
}

export default Product;
