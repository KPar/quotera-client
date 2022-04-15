import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import FixedNav from '../components/CreateOrEditSummary/FixedNav'


function CreateOrEditSummary() {
  const styles = {
    container: {
      height: "90vh",
      width: "100%"
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

  const [isEdit, setIsEdit] = useState(false)

  const publish = () => {
    setIsEdit(!isEdit)
  }

  if(isEdit){
    return (
      <div style={styles.container}>
        <FixedNav publish = {publish}/>
        <h1>Joe's Summary</h1>
        <h2>of Harry Potter By JK</h2>
        <div style={styles.summaryField} contentEditable> </div>
      </div>
    ) 
  } 

  return (
    <div style={styles.container}>
        <FixedNav publish = {publish}/>
        <div style={styles.summaryField}> </div>
    </div>
  )
}

export default CreateOrEditSummary