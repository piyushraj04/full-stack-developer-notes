import React, { createContext, useContext } from "react";
import { myContext } from "../App";

function CompF() {
  const data = useContext(myContext);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default CompF;
