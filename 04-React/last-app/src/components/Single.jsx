import React, { useState } from "react";
import "./Login.css";

function Single() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    alert(`Form Submitted`);
    e.preventDefault();
    const userData = new Object();
    userData.name = user.username;
    userData.pass = user.password;
    localStorage.setItem( "user1", JSON.stringify(user));
  };
  return (
    <>
      <div className="login-page">
        <form action="" className="user-login">
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            placeholder="Username"
            onChange={handleUserInput}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={user.password}
              placeholder="Password"
              onChange={handleUserInput}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
      {/* <h1>{username}</h1> */}
    </>
  );
}

export default Single;
