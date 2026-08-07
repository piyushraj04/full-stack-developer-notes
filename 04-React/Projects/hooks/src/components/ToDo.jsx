import React, { useReducer } from "react";
import "./ToDo.css";
const init = {
  id: 1,
  name: "Piyush",
  age: 22,
  isSingle: true,
};
const reducer = (state, action) => {
  const initAdd = { ...init };
  switch (action) {
    case "add":
      console.log("Added");
      initAdd.id = 2;
      initAdd.name = "Mayank";
      initAdd.age = 23;
      initAdd.isSingle = false;
      return initAdd;
      break;

    case "remove":
      //  const initAdd = {...init}
      console.log("Removed");
      
      initAdd.id = 0;
      initAdd.name = "Give a name please";
      initAdd.age = 0;
      initAdd.isSingle = false;
      return initAdd;
      break;

    case "reset":
        console.log("reset");
        
      //  const initAdd = {...init}
    //   initAdd = { ...init };
      return initAdd;
      break;

    default:
      console.log("Not alllowed");
  }
};
function ToDo() {
  const [task, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <p>id : {task.id}</p>
      <h3>Name : {task.name} </h3>
      <h5>Age : {task.age}</h5>
      <h5>{task.isSingle ? "Single" : "Commited"}</h5>
      <button onClick={() => dispatch("add")}>Add task➕</button>
      <button onClick={() => dispatch("remove")}>Remove task❌</button>
      <button onClick={() => dispatch("reset")}>Toggle status🔄</button>
    </div>
  );
}

export default ToDo;
