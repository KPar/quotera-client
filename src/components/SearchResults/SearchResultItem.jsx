import { useNavigate } from "react-router-dom"

function SearchResultItem({searchResult}) {
    const {bookSummaryID, content, username} = searchResult

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
        navigate(`/reflection/${bookSummaryID}`);
      }
    return (
      <div onClick={goToBookSummary} style={{cursor:"pointer"}}>
        <p style={styles.title}>{username}'s</p>
        <p style={styles.contentStyle}>By {content}</p>
        <div style={styles.divider}></div>
      </div>
    )
  }
  
  export default SearchResultItem