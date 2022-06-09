import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../../pages/SearchResults/SearchResults.css"

function SearchResultItem({searchResult}) {
    const {reflection_id, reflection, user_id, quote, date_modified} = searchResult
    const [username, setUsername] = useState([]);
     
      const navigate = useNavigate();
      const goToReflection = () => {
        navigate(`/reflection/${reflection_id}`);
      }

      useEffect(() => {
        //fetch username
        const getUsername = async () => {
          try{
            let res = await fetch(`https://apiquotera.kennyparedes.com/users/${user_id}/username`);
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
        getUsername()
     },[]);
     
     const goToProfile = (e) => {
       navigate(`/users/${user_id}`);
       e.stopPropagation();
     }
    return (
      <div id="SearchResultsItem_container" onClick={goToReflection} style={{cursor:"pointer"}}>
        <div id="SearchResultsItem_usernameDateFlex">
          <p id="SearchResultsItem_username" onClickCapture={goToProfile}>{username}</p>
          <p id="SearchResultsItem_date">・{date_modified.slice(0,date_modified.indexOf("T"))}</p>
        </div>
        
        <p id="SearchResultsItem_quote">{quote}</p>
        <p id="SearchResultsItem_contentStyle"> {reflection}</p>
        <div id= "SearchResultsItem_divider"></div>
      </div>
    )
  }
  
  export default SearchResultItem