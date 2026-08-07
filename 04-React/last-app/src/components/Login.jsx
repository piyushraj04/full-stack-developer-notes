import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");


  const handleUserInput = (e) => {
    setUsername(e.target.value);
    // console.log(e.target.value);
//    setPassword(e.target.value);
  }
  const handleUserPass = (e1) =>{
    setPassword(e1.target.value)
  }
  const handleSubmit = (e) => {
    alert(`Entered name : ${username}`)
    e.preventDefault();
    const user = new Object();
    user.username = username;
    user.password = password; 
    localStorage.setItem("user1",JSON.stringify(user));
  }
  return (
   <>
    <div className="login-page">
      <form action="" className="user-login">
        <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={handleUserInput}/>

        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={handleUserPass}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
     
    </div>
    <h1>{username}</h1>
   </>
    
  )
}

export default Login