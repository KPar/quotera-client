import React from 'react'
import { useNavigate } from "react-router-dom";


function BookResultItem({bookResult}) {
  const styles = {
    divider: {
      height: "0.5px",
      backgroundColor: "#c7c7c7"
     }
  }
  const {title, author, ISBN, bookID} = bookResult
  const navigate = useNavigate();

  const goToSummariesResults = () => {
    navigate(`/book-summaries/${bookID}`);
  }

  return (
    <div onClick={goToSummariesResults} style={{cursor:'pointer'}}>
      <p style={{fontSize:"20px", marginBottom:-10, fontWeight: "bold"}}>{title}</p>
      <p style={{fontSize:"14px", marginBottom:-10}}>By {author}</p>
      <p style={{fontSize:"14px" }}>ISBN: {ISBN}</p>
      <div style={styles.divider}></div>
    </div>
  )
}

export default BookResultItem