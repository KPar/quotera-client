import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'
import BookAdder from '../../components/CreateReflection/BookAdder'
import PublishNav from '../../components/CreateReflection/PublishNav'
import "../CreateReflection/CreateReflection.css"


function CreateReflection() {
  
  /*
  first check if (its edit url) {
    grab the param reflection id, then do a fetch 
    this fetch will make sure user is authorized to edit the reflection, 
    if they're not we will redirect them to the readBookSummary of this summary
    if all is well, paste the data on the input field
  } else {
    don't display nothing, user will create a summary (no need for an else)
  }
  */

  const location = useLocation()

  const [isEditPage, setIsEditPage] = useState()
  const [selectedBook, setSelectedBook] = useState()

  const publish = () => {
  }

  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
  }
  
  function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  }

  useEffect(() => {
    location.pathname === "/new-reflection"? setIsEditPage(false) : setIsEditPage(true);
    location.pathname.includes("/edit/")? setIsEditPage(true) : setIsEditPage(false);


  }, [location]);

  //TODO if its an edit page, we must send the book data to BookAdder and change the isBookSelected state within it
  //if book is changed, we must change the book state here
  if(isEditPage){
    return (
      <>
      <PublishNav/>
        <div id="CreateReflection_container">
          <BookAdder/>
          <textarea id="CreateReflection_quoteField" placeholder="Quote..." contentEditable/>
          <textarea id="CreateReflection_reflectionField" placeholder="Reflection..." contentEditable/>
        </div>
      </>
    ) 
  } 

  return (
    <>
      <PublishNav/>
      <div id="CreateReflection_container">
          <BookAdder/>
          <textarea id="CreateReflection_quoteField" placeholder="Quote..." contentEditable/>
          <textarea id="CreateReflection_reflectionField" placeholder="Reflection..." contentEditable/> 
      </div>
    </>
  )
}

export default CreateReflection