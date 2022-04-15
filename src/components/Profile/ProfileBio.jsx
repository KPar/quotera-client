import React, { useEffect, useState } from 'react'

function ProfileBio() {
  const styles = {
      container: {
          height: "200px",
          width: "100%",
          borderBottom:"solid 0.5px"
      }
  }

  const [bioData, setBioData] = useState({});

  useEffect(() => {
    //fetch data and assign to state
    setBioData({
        displayName: "Tom Ford",
        username: "qqwwee",
        createdOn: "June 20,2020"
    })
   },[]);

  return (
    <div style={styles.container}>
        <h1>{bioData.displayName}</h1>
        <h2>{bioData.username}</h2>
        <p>Joined {bioData.createdOn}</p>
    </div>
  )
}

export default ProfileBio