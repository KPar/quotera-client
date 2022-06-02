import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../ReadReflection/ReadReflection.css"

function ReadReflection() {
  const styles = {
    quoteContainer: {
      display: "flex",
      margin: "auto",
      marginBottom:"30px",
      height: "fit-content",
      borderLeft: "3px solid black",
      paddingLeft: "20px"
    }
  }
  const [data, setData] = useState({date_created:""});
  const [bookData, setBookData] = useState([]);
  const [username, setUsername] = useState([]);

  const {reflectionID} = useParams();  
  const navigate = useNavigate();
  const getBook = async (bookID) => {
    try{
      let res = await fetch(`http://localhost:5500/books/id/${bookID}`);
      if(res.status===404){
        setBookData({})
      }else{
        let dataRes = await res.json();   
        setBookData(dataRes);
      }
      
    } catch (err){
        console.log(err);
    }
}
const getUsername = async (user_id) => {
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
  const getReflection = async () => {
        try{
          let res = await fetch(`http://localhost:5500/reflections/${reflectionID}`);
          if(res.status===404){
            setData({date_created:""})
          }else{
            let dataRes = await res.json();   
            setData(dataRes);
            getUsername(dataRes.user_id);
            getBook(dataRes.book_id)
          }
          
        } catch (err){
            console.log(err);
        }
  }



  useEffect(() => {
    //fetch data and assign to state
    console.log(reflectionID)
    getReflection()
 },[]);

  const goToSearch = () => {
    navigate(`/search?id=${data.book_id}`);
  }

  const goToProfile = () => {
    navigate(`/users/${data.user_id}`);
  }
  return (
    <div id="ReadReflection_container">      
      

      <div id="ReadReflection_bookContainer" onClick={goToSearch} style={{cursor:'pointer'}}>
        <div id="ReadReflection_bookImageContainer">
          <img style={{borderRadius:"10px"}} id="ReadReflection_bookImage" alt="bookCover" src={`https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`}/>
        </div>
        <div id='ReadReflection_bookText'>
          <p>{bookData.title}</p>
          <p>By {bookData.author}</p>
          <p>ISBN: {bookData.isbn}</p>
        </div>
      </div>
      <div id='ReadReflection_usernameDateContainer'>
        <p id='ReadReflection_username' onClick={goToProfile}>{username}</p>
        <p id='ReadReflection_date'>{data.date_created.slice(0,data.date_created.indexOf("T"))}</p>
      </div>
      
      <div style={styles.quoteContainer}> 
        <p id="ReadReflection_quote">{data.quote}</p>
      </div>
      <p id="ReadReflection_reflection">{data.reflection}</p>
    </div>
  )
}

export default ReadReflection