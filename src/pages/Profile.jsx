import ProfileBio from "../components/Profile/ProfileBio"
import ProfileReflectionsList from "../components/Profile/ProfileReflectionsList"

function Profile() {

  return (
    <div style={{width:"70vw", margin:"auto", marginTop:"100px"}}>
      <ProfileBio/>
      <h1 style={{textAlign:"center"}}>Reflections</h1>
      <ProfileReflectionsList/>
    </div>
  )
}

export default Profile