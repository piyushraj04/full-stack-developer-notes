// Import React and the useState Hook.
// useState is used to store and update the local state of this component.
import React, { useState } from "react";

// Import ThemeContext from App.jsx.
// ThemeContext is the Context object created using React.createContext().
// We use it to access the value provided by ThemeContext.Provider.
import { ThemeContext } from "../App";

const CompE = () => {
  // ---------------- Local State ----------------

  // state = true  -> Apply the theme received from Context (e.g., "dark")
  // state = false -> Apply the hardcoded "light" class
  //
  // Initially, state is true, so the Context theme is applied.
  const [state, setState] = useState(true);

  // ---------------- Event Handler ----------------

  // This function runs whenever the button is clicked.
  // It toggles the state between true and false.
  //
  // Example:
  // true  -> false
  // false -> true
  //
  // Changing the state causes React to re-render this component.
  function handleBgTheme() {
    setState(!state);
  }

  // ---------------- JSX ----------------

  return (
    <div className="wrapper">
      <h1>CompE</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nobis!
      </p>

      {/* ----------------------------------------------------------
          ThemeContext.Consumer

          Consumer is used to read the value stored inside
          ThemeContext.Provider.

          App.jsx:

          <ThemeContext.Provider value="dark">
              <CompC />
          </ThemeContext.Provider>

          The value "dark" travels through the component tree and
          reaches this Consumer.

          React automatically passes that value as the parameter
          (themeDark) below.
      ----------------------------------------------------------- */}

      <ThemeContext.Consumer>
        {(themeDark) => {
          /* 
             themeDark contains the value provided by Provider.

             Example:

             <ThemeContext.Provider value="dark">

             then

             themeDark = "dark"
          */

          return (
            // ----------------------------------------------------
            // Apply CSS class conditionally.
            //
            // If state is true:
            //      className = themeDark
            //      Example: className = "dark"
            //
            // If state is false:
            //      className = "light"
            //
            // This changes the background/theme.
            // ----------------------------------------------------
            <div className={state ? themeDark : "light"}>
              <h1>The bgc comes from App</h1>

              {/* 
                  When this button is clicked:

                  1. handleBgTheme() executes.
                  2. State changes.
                  3. React re-renders the component.
                  4. className is calculated again.
                  5. Background switches between "dark" and "light".
              */}
              <button onClick={handleBgTheme}>
                Light
              </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

export default CompE;