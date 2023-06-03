// Code Keypad Component Here
import React from "react";

function Keypad() {
  return (
    <div>
      <input type="password" id="password" onChange={(e) => console.log("Entering password...")} />
    </div>
  );
}

export default Keypad;

// <label htmlFor="username">Username</label>
// <input type="text" id="username" />
