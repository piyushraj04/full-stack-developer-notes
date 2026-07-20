import React, { useState } from "react";

function TheGreetingCard() {
  const [name, setName] = useState("Guest");
 const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default TheGreetingCard;
