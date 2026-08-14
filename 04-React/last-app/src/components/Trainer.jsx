import React from "react";

const time = new Date();

function Trainer(props) {
  return (
    <div>
      <h1>
        Hello {props.user}, you're {props.role} here, Welcome Back 😊
      </h1>

      <p>
        Login: {time.getHours()}:{time.getMinutes()}
      </p>
    </div>
  );
}

export default Trainer;