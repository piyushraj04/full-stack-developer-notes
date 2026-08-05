import React, { useRef } from "react";

function Refhook() {
  const inpRef = useRef(null);
  const myRef = useRef(0);
  console.log(myRef);
  console.log("Component Rendered");
  function handleRefvalue() {
    // myRef.current.focus();
    // myRef.current.value = "Piyush Raj from btn😁..."
    // myRef.current++;
    myRef.current++;
    console.log(myRef.current);
    // inpRef.current.value = myRef.current;
  }
  return (
    <div>
      {/* //ref={myRef}    ref={inpRef} */}
      <input type="text" />
      <button onClick={handleRefvalue}>Focus</button>
    </div>
  );
}

export default Refhook;
