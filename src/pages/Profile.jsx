import ProfileBio from "../components/Profile/ProfileBio"
import ProfileSummariesList from "../components/Profile/ProfileSummariesList"

function Profile() {

  return (
    <div style={{display:"flex"}}>
      <ProfileBio/>
      <div style={{display:"block", width:"100%", marginLeft:"50px"}}>
        <ProfileSummariesList/>
      </div>
    </div>
  )
}

export default Profile