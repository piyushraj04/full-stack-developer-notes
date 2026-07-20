import React, { useState } from "react";

function TheLightFun() {
  let [status, setStatus] = useState(true);
  function toggle() {
    status = setStatus(!status);
    //   console.log(status);
  }
  return (
    <div>
      

      <h1>{status ? "The Light is ON" : "The light is OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default TheLightFun;
