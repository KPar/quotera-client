import { createContext, useEffect, useState } from "react";
import ProfileBio from "../../components/Profile/ProfileBio"
import ProfileReflectionsList from "../../components/Profile/ProfileReflectionsList"

export const ProfileContext = createContext();

function Profile() {

  const [isPersonalProfile, setisPersonalProfile] = useState(true)

  useEffect(() => {
      //fetch user data and assign to state, check if current profile is same as user logged in
      //if so, we display edit buttons
      
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