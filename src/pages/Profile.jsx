import ProfileBio from "../components/Profile/ProfileBio"
import ProfileSummariesList from "../components/Profile/ProfileSummariesList"

function Profile() {

  return (
    <div style={{width:"70vw", margin:"auto"}}>
      <ProfileBio/>
      <h1 style={{textAlign:"center"}}>Summaries</h1>
      <div style={{display:"block", width:"100%"}}>
        <ProfileSummariesList/>
      </div>
    </div>
  )
}

export default Profile