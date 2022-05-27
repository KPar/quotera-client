import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBio from "../../components/Profile/ProfileBio"
import ProfileReflectionsList from "../../components/Profile/ProfileReflectionsList"

export const ProfileContext = createContext();

function Profile() {

  const [isPersonalProfile, setisPersonalProfile] = useState(false)
  let {userID} = useParams();

  useEffect(() => {
      const authProfile = async () => {
        try {
          let res = await fetch(`http://localhost:5500/users/${userID}/auth`,{credentials:'include'});
          if(res.status===200){
            setisPersonalProfile(true)
          }else{
            setisPersonalProfile(false)
          }
        } catch (error) {
          console.log(error)
        }
      }
      authProfile();
   },[]);


  return (
    <div style={{width:"70vw", margin:"auto", marginTop:"100px"}}>
      <ProfileContext.Provider value = {{isPersonalProfile, setisPersonalProfile}}>
        <ProfileBio/>
        <h1 style={{textAlign:"center"}}>Reflections</h1>
        <ProfileReflectionsList/>
      </ProfileContext.Provider>
    </div>
  )
}

export default Profile