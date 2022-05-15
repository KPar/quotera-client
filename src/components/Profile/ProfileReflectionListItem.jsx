import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../pages/Profile/Profile';
import "../../pages/Profile/Profile.css"

function ProfileReflectionListItem({listItem}) {
    const {reflectionID, quote, reflection, bookTitle, author} = listItem

    const {isPersonalProfile} = useContext(ProfileContext);

     const navigate = useNavigate();
     const goToReflection = () => {
       navigate(`/reflection/${reflectionID}`);
     }

    const goToEdit = () => {
      navigate(`/edit/${reflectionID}`);
    }

    const deleteReflection = () => {
      //delete
    }


   return (
     <div style={{cursor:"pointer"}}>
       <div onClick={goToReflection}>
       <p id="ProfileReflectionListItem_title">{quote}</p>
       <p id="ProfileReflectionListItem_contentStyle">{reflection}</p>
         <p id="ProfileReflectionListItem_contentStyle">{bookTitle}</p>
        <p id="ProfileReflectionListItem_contentStyle">By {author}</p>
       </div>
       <button onClick={goToEdit} style={{display: isPersonalProfile? "block":"none"}}>Edit</button>
       <button onClick={deleteReflection} style={{display: isPersonalProfile? "block":"none"}}>Delete</button>
       <div id="ProfileReflectionListItem_divider"></div>
     </div>
   )
}

export default ProfileReflectionListItem