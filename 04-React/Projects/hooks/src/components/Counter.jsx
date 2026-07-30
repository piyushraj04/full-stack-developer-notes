import React from "react";
import { useState } from "react";
import bulbOn from "../assets/bulbOn.jfif"
import bulbOff from "../assets/bulbOff.jfif"
import ArraysComp from "./ArraysComp";

const initVal = 0;
const img = bulbOff;
const Counter = () => {
  const [count, setCount] = useState(initVal);
  const [submit, setSubmit] = useState("Submit");
  const [bulb, setBulb] = useState(false);
  const [bulbImg,setBulbImg] = useState(false)
  const handleSubmit = () => {
    setSubmit("Submitted");
  };

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleDecCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleResetSubmit = () => {
    setSubmit("Submit");
  };
  const handleTime = () => {
    setTimeout(() => {
      setSubmit("Submitted");
      console.log("this");
    }, 5000);
  };
  const handleBulb = () => {
    setBulb(!bulb);
  }
  const handleBulbImg = () => {
    setBulbImg(!bulbImg)
    
  }

  // console.log(count);
  return (
    <div>
      <button onClick={handleDecCount}>Decrement</button>
      <h1>Counter - {count}</h1>
      <button onClick={handleCount}>Increment</button>
      <hr />
      <button
        onClick={() => {
          setTimeout(() => {
            setSubmit("SetTimeOut");
          }, 5000);
        }}
      >
        Inside btn
      </button>
      <button onClick={handleTime}>Time Submit</button>
      <button onClick={handleSubmit}>{submit}</button>
      <button onClick={handleResetSubmit}>Reset</button>
      <hr />
      <hr />
      <h1>Bulb - {bulb ? "ON" : "OFF"}</h1>
      <button onClick={handleBulb}>{bulb ? "OFF" : "ON"}</button>
      <br />
      <hr />


      <img src={bulbImg?bulbOn:bulbOff} alt="" />
      <button onClick={handleBulbImg}>{bulbImg ? "OFF" : "ON"}</button>
      <hr />
      <ArraysComp/>
    </div>
  );
};

export default Counter;
