import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/Counter";
import Effect from "./components/Effect";
import CompC from "./components/CompC";
import Refhook from "./components/Refhook";
import RefHook2 from "./components/RefHook2";

export const myContext = createContext();
const data = {
  name: "Piyush",
  age: 22,
};
function App() {
  return (
    <>
    <RefHook2/>
    {/* <Refhook/> */}
      {/* <myContext.Provider value={data}>
        <CompC />
      </myContext.Provider> */}

      {/* <Effect/>
    <hr />
     <Counter/> */}
    </>
  );
}

export default App;
