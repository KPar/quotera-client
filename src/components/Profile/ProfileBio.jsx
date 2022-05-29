import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProfileContext } from '../../pages/Profile/Profile';
import "../../pages/Profile/Profile.css"

function ProfileBio() {
  const [bioData, setBioData] = useState({
    username: "",
    date_created:""
  });
  let {userID} = useParams();



  useEffect(() => {  
    const setBio = async () => {          
        try {
            let res = await fetch(`http://localhost:5500/users/${userID}`);
            if(res.status===404){
              setBioData({})
            }else{
               let dataRes = await res.json();              
               setBioData(dataRes);
            }
        } catch (error) {
          console.log(error)
        }
      }
    setBio();
   },[]);

  return (
    <div id = "ProfileBio_container">
        <h2 id = "ProfileBio_username">{bioData.username}</h2>
        <p id = "ProfileBio_joinDate">Joined {bioData.date_created.slice(0,bioData.date_created.indexOf("T"))}</p>
    </div>
  )
}

export default ProfileBio