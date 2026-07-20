import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function CondRen1() {
    const isLogged = false;
  if(isLogged){
    return <h1>Welocome Dude</h1>
  }
  else{
    return <Spinner animation="grow" />
  }
}

export default CondRen1