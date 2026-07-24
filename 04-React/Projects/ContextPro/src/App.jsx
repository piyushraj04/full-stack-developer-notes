import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import React from "react";

import "./App.css";
import CompC from "./components/CompC";
const theme = "dark";
export const ThemeContext = React.createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <h1>App</h1>
      <ThemeContext.Provider value={theme}>
        <CompC/>
      </ThemeContext.Provider>
      {/* <h3>Theme : {theme}</h3> */}
      {/* <CompC theme={theme} /> */}
    </div>
  );
}

export default App;
