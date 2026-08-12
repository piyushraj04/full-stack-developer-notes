import React, { useReducer } from "react";
const initialState = {
  todos: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "updateTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              subject: action.payload.subject,
            };
          }
          return todo;
        }),
      };

      case "toggleTodo" : 
      return {
        ...state,
        todos : state.todos.map(todo=>{
            if(todo.id === action.payload){
                return {
                    ...todo,
                    isCompleted : !(todo.isCompleted)
                }
            }
            return todo;
        })
      }
    default:
      return state;
  }
};

function ToDo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="card">
      <h2>Todo App</h2>

      {/* //ADD_FUNCTIONALITY */}
      <button
        onClick={() =>
          dispatch({
            type: "addTodo",
            payload: {
              id: 2,
              subject: "React",
              isCompleted: false,
            },
          })
        }
      >
        Add Todo
      </button>

      {/* //DELETE_FUNCTIONALITY */}
      <button
        onClick={() =>
          dispatch({
            type: "deleteTodo",
            payload: 2,
          })
        }
      >
        Delete
      </button>

      {/* //UPDATE_FUNCTIONALITY */}
      <button
        onClick={() =>
          dispatch({
            type: "updateTodo",
            payload: {
              id: 2,
              subject: "Learn Advanced React",
            },
          })
        }
      >
        Update
      </button>

      {/* //TOGGLE_FUNCTIONALITY */}
      <button
        onClick={() => {
          dispatch({
            type: "toggleTodo",
            payload:2
          });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default ToDo;
