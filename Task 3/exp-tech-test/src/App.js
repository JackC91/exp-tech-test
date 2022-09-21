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

function App() {
  return (
    <div className="App">
    <UserName/>
    </div>
  );
}

export default App;
