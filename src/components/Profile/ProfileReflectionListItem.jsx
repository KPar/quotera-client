import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../pages/Profile/Profile';
import "../../pages/Profile/Profile.css"

function ProfileReflectionListItem({listItem, getReflections}) {
    const {reflection_id, quote, book_id, reflection} = listItem

    const {isPersonalProfile} = useContext(ProfileContext);
    const [bookData, setBookData] = useState({});

     const navigate = useNavigate();
     const goToReflection = () => {
       navigate(`/reflection/${reflection_id}`);
     }

    const goToEdit = () => {
      navigate(`/edit/${reflection_id}`);
    }

    const deleteReflection = async () => {
      try {
        const requestOptions = {
          method: 'DELETE',
          credentials: 'include'
        };
        let res = await fetch(`http://localhost:5500/reflections/${reflection_id}`, requestOptions);
        if(res.status!==200){
          alert("Unauthorized")
        }else{
          getReflections();
        }
      } catch (error) {
        
      }
    }

    useEffect(()=>{
      const getBookData = async () => {
        try {
          let res = await fetch(`http://localhost:5500/books/id/${book_id}`);
          if(res.status===404){
            setBookData({})
          }else{
            let dataRes = await res.json();
            setBookData(dataRes)
          }
        } catch (error) {
          
        }
       }
       getBookData()
    },[])

   return (
     <div style={{cursor:"pointer"}}>
       <div onClick={goToReflection}>
       <p id="ProfileReflectionListItem_title">{quote}</p>
       <p id="ProfileReflectionListItem_contentStyle">{reflection}</p>
         <p id="ProfileReflectionListItem_contentStyle">{bookData.title}</p>
        <p id="ProfileReflectionListItem_contentStyle">By {bookData.author}</p>
       </div>
       <button onClick={goToEdit} style={{display: isPersonalProfile? "block":"none"}}>Edit</button>
       <button onClick={deleteReflection} style={{display: isPersonalProfile? "block":"none"}}>Delete</button>
       <div id="ProfileReflectionListItem_divider"></div>
     </div>
   )
}

export default ProfileReflectionListItem