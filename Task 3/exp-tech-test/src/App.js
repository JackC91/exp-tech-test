import React, { useEffect } from "react";
import { useState } from "react";

function UserName({setUser}) {

  function captureUser(e) {
    setUser(e.target.value);
  }

  return (
    <input id="username-input" type="text" onChange={captureUser}/>
  )}

  function Password({setPassword}) {
  
    function capturePassword(e) {
      setPassword(e.target.value);
    }
  
    return (
      <input id="password-input" type="password" onChange={capturePassword}/>
    )}

function SubmitButton({isDisabled, user, password}) {
  return (
    <button id="login-button" disabled={isDisabled} onClick={() => console.log(user, password)}>Submit</button>
  )
}


function App() {
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isDisabled, setIsDisabled ] = useState(true)

useEffect(() => {
  if (user.length > 1 && password.length > 1) {
    setIsDisabled(false)
  }
}, [user, password])

  return (
    <div className="App">
    <UserName setUser={setUser} user={user}/>
    <Password setPassword={setPassword} password={password}/>
    <SubmitButton isDisabled={isDisabled} user={user} password={password}/>
    </div>
  );
}

export default App;
