import React from 'react'

function ListRendering() {
const products = ["milk","egg","dairy","choco"];
const filteredProducts = products.filter((prod)=>prod=="");

 return(
  products.map((item)=>{
  switch(item){
  case "milk" : return <h1>{item}</h1>
  break;
  case "egg" : return <h1>{item}</h1>;
  default : return  <h1>Wrong data... {item}</h1>
 }
 })
 )
}

export default ListRendering