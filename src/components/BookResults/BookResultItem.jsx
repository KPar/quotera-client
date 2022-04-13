import React from 'react'

function BookResultItem({bookResult}) {
  const {title, author, ISBN} = bookResult
  return (
    <div>
      <p style={{fontSize:"20px", marginBottom:-10, fontWeight: "bold"}}>{title}</p>
      <p style={{fontSize:"14px", marginBottom:-10}}>By {author}</p>
      <p style={{fontSize:"14px" }}>ISBN: {ISBN}</p>
      <div id="divider" style={{height: "0.5px", backgroundColor: "#c7c7c7"}}></div>
    </div>
  )
}

export default BookResultItem