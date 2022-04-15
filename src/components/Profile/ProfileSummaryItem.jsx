import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileSummaryItem({summaryItem}) {
    const {summaryID, bookTitle, author} = summaryItem

    const styles = {
      divider: {
       height: "0.5px",
       backgroundColor: "#c7c7c7"
      },
       title: {
         fontSize:"20px", 
         marginBottom:-10, 
         fontWeight: "bold"
       },
       contentStyle : {
         fontSize:"14px", 
         marginBottom:10, 
         overflow:"hidden", 
         textOverflow:"ellipsis", 
         width:"50%", 
         display: "-webkit-box", 
         WebkitLineClamp: 2, 
         WebkitBoxOrient: "vertical", 
         lineHeight:"16px", 
         maxHeight:"32px"
       },
     }
     const navigate = useNavigate();
     const goToBookSummary = () => {
       navigate(`/book-summary/${summaryID}`);
     }
   return (
     <div onClick={goToBookSummary} style={{cursor:"pointer"}}>
       <p style={styles.title}>{bookTitle}'s</p>
       <p style={styles.contentStyle}>By {author}</p>
       <div style={styles.divider}></div>
     </div>
   )
}

export default ProfileSummaryItem