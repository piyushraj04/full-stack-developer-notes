import React, { useReducer } from "react";
const initialState = {
  name: "Piyush",
  age: 22,
};
function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
         ...state,
         name: action.payload };
    case "changeAge":
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
}
function UseReducerE() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{state.age}</h1>
      <button
        onClick={()=>dispatch({
          type: "changeName",
          payload: "Mayank",
        })}
      >
        Change Name
      </button>
      <br />
      <button
        onClick={()=>dispatch({
          type: "changeAge",
          payload: "25",
        })}
      >
        Change Age
      </button>
    </div>
  );
}

export default UseReducerE;
