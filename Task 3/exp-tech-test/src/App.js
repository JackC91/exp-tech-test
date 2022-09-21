import React from "react";
import { useState } from "react";

function UserName() {
  const [ user, setUser ] = useState("");

  function captureUser(e) {
    setUser(e.target.value);
  }

  return (
    <input id="username-input" type="text" onChange={captureUser}/>
  )}

  function Password() {
    const [ password, setPassword ] = useState("");
  
    function capturePassword(e) {
      setPassword(e.target.value);
      console.log(password)
    }
  
    return (
      <input id="password-input" type="password" onChange={capturePassword}/>
    )}

function SubmitButton() {
  return (
    <button id="login-button">Submit</button>
  )
}

function App() {
  return (
    <div className="App">
    <UserName/>
    <Password/>
    <SubmitButton/>
    </div>
  );
}

export default App;
