import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'
import BookAdder from '../../components/CreateReflection/BookAdder'
import PublishNav from '../../components/CreateReflection/PublishNav'
import "../CreateReflection/CreateReflection.css"


function CreateReflection() {
  const styles = {
    container: {
      height: "90vh",
      width: "70vw",
      margin: "auto",
      marginTop:"100px"
    },
    summaryField: {
      marginTop: "10vh",
      height: "50vh",
      width: "100%",
      fontSize: "15px",
      outline: "none",
      border: "none",
      overflow: "auto",
      resize: "none"
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

  const location = useLocation()

  const [isEditPage, setIsEditPage] = useState()

  const publish = () => {
  }


  useEffect(() => {
    location.pathname === "/new-book-summary"? setIsEditPage(false) : setIsEditPage(true);
    location.pathname.includes("/edit/")? setIsEditPage(true) : setIsEditPage(false);


  }, [location]);

  if(isEditPage){
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
    <>
      
      <PublishNav/>
      <div style={styles.container}>
          <BookAdder/>
          <textarea style={styles.summaryField} placeholder="Write your summary..."/>
      </div>
    </>
  )
}

export default CreateReflection