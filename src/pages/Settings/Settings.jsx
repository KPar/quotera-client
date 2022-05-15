import { useState } from 'react'
import "../Settings/Settings.css"

function Settings() {
  const [emailAddress, setEmailAddress] =useState();

  return (
    <div id="Settings_container">
      <h1>Account Settings</h1>
      <div id="Settings_row">
        <button>Change Email Address</button>
        <p>{emailAddress}jjj</p>
      </div>
      <div id="Settings_row">
        <button>Change Password</button>
        <p>*******</p>
      </div>
      <div id="Settings_divider"></div>
      <h1>Delete Account</h1>
      <div>
        <button>Delete Account</button>
      </div>
    </div>
  )
}

export default Settings