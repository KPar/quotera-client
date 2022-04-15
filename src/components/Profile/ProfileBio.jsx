import React from 'react'

function ProfileBio() {
  const styles = {
      container: {
          height: "500px",
          width: "300px",
          borderRight:"solid 0.5px"
      }
  }
  return (
    <div style={styles.container}>
        <h1>Tom Ford</h1>
        <h2>username</h2>
        <p>Joined ...</p>
    </div>
  )
}

export default ProfileBio