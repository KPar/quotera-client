import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function SearchResultItem({searchResult}) {
    const {reflection_id, reflection, user_id, quote} = searchResult
    const [username, setUsername] = useState([]);
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
      const goToReflection = () => {
        navigate(`/reflection/${reflection_id}`);
      }

      useEffect(() => {
        //fetch username
        const getUsername = async () => {
          try{
            let res = await fetch(`http://localhost:5500/users/${user_id}/username`);
            if(res.status===404){
              setUsername("")
            }else{
              let dataRes = await res.json();              
              setUsername(dataRes.username);
            }
            
          } catch (err){
              console.log(err);
          }
        }
        console.log(username)
  
        getUsername()
     },[]);
     
    return (
      <div onClick={goToReflection} style={{cursor:"pointer"}}>
        <p style={styles.title}>{quote}</p>
        <p style={styles.contentStyle}> {reflection}</p>
        <p style={styles.contentStyle}>By {username}</p>

        <div style={styles.divider}></div>
      </div>
    )
  }
  
  export default SearchResultItem