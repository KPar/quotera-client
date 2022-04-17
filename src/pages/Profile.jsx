import ProfileBio from "../components/Profile/ProfileBio"
import ProfileSummariesList from "../components/Profile/ProfileSummariesList"

function Profile() {

  return (
    <div style={{width:"70vw", margin:"auto", marginTop:"100px"}}>
      <ProfileBio/>
      <h1 style={{textAlign:"center"}}>Summaries</h1>
      <ProfileSummariesList/>
    </div>
  )
}

export default Profile