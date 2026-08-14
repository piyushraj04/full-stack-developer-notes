import { useState } from "react";

function Credentials({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  function handleSubmit() {
    onLogin(username, password, role);
  }

  return (
    <div>
      <h2>Credentials</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <label>
        <input
          type="radio"
          name="role"
          value="Trainer"
          checked={role === "Trainer"}
          onChange={(e) => setRole(e.target.value)}
        />
        Trainer
      </label>

      <label style={{ marginLeft: "20px" }}>
        <input
          type="radio"
          name="role"
          value="Student"
          checked={role === "Student"}
          onChange={(e) => setRole(e.target.value)}
        />
        Student
      </label>

      <br />
      <br />

      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
}

export default Credentials;