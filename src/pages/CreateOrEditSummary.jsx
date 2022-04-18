import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PublishNav from '../components/CreateOrEditSummary/PublishNav'
import FixedNav from '../components/FixedNav'


function CreateOrEditSummary() {
  const styles = {
    container: {
      height: "90vh",
      width: "100%",
      marginTop:"100px"
    },
    summaryField: {
      marginTop: "10vh",
      height: "100%",
      width: "100%"
    },
    nav: {
      position: "fixed",
      top: "0",
      width: "100%",
      height: "50px",
      backgroundColor: "gray"
    }
  }
  /*
  first check if (its edit url) {
    grab the param summary id, then do a fetch 
    this fetch will make sure user is authorized, 
    if they're not we will redirect them to the readBookSummary of this summary
    if all is well, paste the data on the input field
  } else {
    don't display nothing, user will create a summary (no need for an else)
  }
  */

  const [isEdit, setIsEdit] = useState(true)

  const publish = () => {
    setIsEdit(!isEdit)
  }

  if(isEdit){
    return (
      <>
        <PublishNav/>
        <div style={styles.container}>
          <h1>Joe's Summary</h1>
          <h2>of Harry Potter By JK</h2>
          <div style={styles.summaryField} contentEditable> </div>
        </div>
      </>
    ) 
  } 

  return (
    <div style={styles.container}>
        <div style={styles.summaryField}>m </div>
    </div>
  )
}

export default CreateOrEditSummary