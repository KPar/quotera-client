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
        let res = await fetch(`https://apiquotera.kennyparedes.com/reflections/${reflection_id}`, requestOptions);
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
          let res = await fetch(`https://apiquotera.kennyparedes.com/books/id/${book_id}`);
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
       <div id="ProfileReflectionListItem_containerFlex">
          <div onClick={goToReflection}> 
            <div id="ProfileReflectionListItem_bookFlex">
              <p id="ProfileReflectionListItem_bookTitle">{bookData.title}</p>
              <p id="ProfileReflectionListItem_bookAuthor">by {bookData.author}</p>
            </div>
            <p id="ProfileReflectionListItem_quote">{quote}</p>
            <p id="ProfileReflectionListItem_contentStyle">{reflection}</p>
          </div>
          <div id="ProfileReflectionListItem_buttonFlex">
            <button id="ProfileReflectionListItem_button" onClick={goToEdit} style={{display: isPersonalProfile? "block":"none"}}>Edit</button>
            <button id="ProfileReflectionListItem_deleteButton" onClick={deleteReflection} style={{display: isPersonalProfile? "block":"none"}}>Delete</button>
          </div>
        </div>
       <div id="ProfileReflectionListItem_divider"></div>
     </div>
   )
}

export default ProfileReflectionListItem