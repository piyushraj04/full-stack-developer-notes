import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");


  const handleUserInput = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  //  setPassword(e.target.valu Login spike called, so drabace raz user new password base, so you have a singing implemented senior implementing half place, drace matter, set of humter, humble, studying, fartelap, function bange login nom,login nom came functionongoing e mail or password, user name or password nem password lecker Api mare user, worry form mare, to Scenario, came data dallin function call cap कर रहेPura User name enter the password enter login पे clicking, login पे clicking the function each bar call huh. Mank, shelling him, R function a littlelegal senior, licked, R she brings collect, for a lick, function called R J lick, R J Le);
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