import React from 'react'

function FixedNav({publish}) {
  const styles = {
    nav: {
      position: "fixed",
      top: "0",
      width: "100%",
      height: "50px",
      backgroundColor: "gray"
    }
  }
  return (
    <div style={styles.nav}>
      <button onClick={publish}>Publish</button>
    </div>
  )
}

export default FixedNav