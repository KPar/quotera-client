import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../pages/Profile/Profile';
import "../../pages/Profile/Profile.css"

function ProfileBio() {

  const {isPersonalProfile} = useContext(ProfileContext);

  const [bioData, setBioData] = useState({});

  useEffect(() => {
    //fetch data and assign to state
    setBioData({
        displayName: "Tom Ford",
        username: "qqwwee",
        createdOn: "June 20,2020",
        bioInfo: "I like flying kites"
    })
   },[]);

  return (
    <div id="ProfileBio_container">
        <button style={{display: isPersonalProfile? "block":"none"}}>Edit</button>
        <h1>{bioData.displayName}</h1>
        <h2>{bioData.username}</h2>
        <p>{bioData.bioInfo}</p>
        <p>Joined {bioData.createdOn}</p>
    </div>
  )
}

export default ProfileBio