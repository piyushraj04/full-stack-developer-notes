import React from 'react'

function ListRendering() {
const products = ["milk","egg","dairy","choco"];
const filteredProducts = products.filter((prod)=>prod=="milk");

 return(
  filteredProducts.map((item)=>{
  switch(item){
  case "milk" : return <h1>{item}</h1>;
  case "egg" : return <h1>{item}</h1>;
  default : <h1>Wrong data...</h1>
 }
 })
 )
}

export default ListRendering