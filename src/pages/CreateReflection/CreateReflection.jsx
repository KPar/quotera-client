import { createContext, useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import BookAdder from '../../components/CreateReflection/BookAdder'
import PublishNav from '../../components/CreateReflection/PublishNav'
import "../CreateReflection/CreateReflection.css"

export const createReflectionContext = createContext()

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
  const navigate = useNavigate()

  const [isEditPage, setIsEditPage] = useState()
  const [selectedBookID, setSelectedBookID] = useState()
  const [reflection, setReflection] = useState()
  const [quote, setQuote] = useState()


  const quoteRef = useRef();
  const reflectionRef = useRef();
	let {reflectionID} = useParams();

  const getReflectionAndQuote = () => {
    setReflection(reflectionRef.current.value);
    setQuote(quoteRef.current.value);
    return {
      reflection: reflectionRef.current.value, 
      quote: quoteRef.current.value
     }
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
    //location.pathname === "/new-reflection"? setIsEditPage(false) : setIsEditPage(true);
    const checkEditPermission = async () => {
      try {
        console.log("id: "+reflectionID)
        let res = await fetch(`http://localhost:5500/reflections/checkEditPermission/${reflectionID}`,{credentials: 'include'});
        if(res.status!==200){
          navigate('/');
        }
      } catch (error) {
        console.log(error)
      }
    }

    const setReflectionData = async () => {      
      checkEditPermission();
      try {
        let res = await fetch(`http://localhost:5500/reflections/${reflectionID}`,{ credentials: 'include'});
            if(res.status===404){
              navigate('/');
            }else{
              let dataRes = await res.json();   
              setReflection(dataRes.reflection);
              setQuote(dataRes.quote);
              setSelectedBookID(dataRes.book_id);
              quoteRef.current.value = quote;
              reflectionRef.current.value = reflection;
            }
      } catch (error) {
        
      }
    }

  if(location.pathname.includes("/edit/")){
      setIsEditPage(true);
      setReflectionData(); 
    }else{

    }

  },[location, reflection, quote]);



  //TODO if its an edit page, we must send the book data to BookAdder and change the isBookSelected state within it
  //if book is changed, we must change the book state here
    return (
     <createReflectionContext.Provider value = {{selectedBookID,setSelectedBookID,reflection,quote, getReflectionAndQuote}}>
      <PublishNav/>
       <div id="CreateReflection_container">
          <BookAdder/>
          <textarea ref = {quoteRef} id="CreateReflection_quoteField" placeholder="Quote..." contentEditable/>
          <textarea ref = {reflectionRef} id="CreateReflection_reflectionField" placeholder="Reflection..." contentEditable/>
        </div>
      </createReflectionContext.Provider>
    ) 
}

export default CreateReflection