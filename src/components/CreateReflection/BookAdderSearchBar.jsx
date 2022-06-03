import React, { createContext, useContext, useRef, useState } from 'react'
import "../../pages/CreateReflection/CreateReflection.css"
import {BookAdderContext} from "./BookAdder"
import BookAdderSearchResults from './BookAdderSearchResults';

export const BookAdderSearchBarContext = createContext();


function BookAdderSearchBar() {
    const {isBookSelected} = useContext(BookAdderContext);

    const inputRef = useRef();

    const [results, setResults] = useState();

    const fetchResults = async (e) => {
      if(inputRef.current.value.trim().length===0){
        setResults([]);
        return;
      }
      try{
          let res = await fetch(`https://quotera.herokuapp.com/books/q?data=${inputRef.current.value.trim().toLowerCase()}`);
          if(res.status===404){
            setResults([])
          }else{
            let dataRes = await res.json();
            setResults(dataRes)
          }
          
      } catch (err){
          console.log("k "+err);
      }
  }

     if(!isBookSelected){
         return (
            <BookAdderSearchBarContext.Provider value={{setResults}}>
                <input ref={inputRef} id ="BookAdderSearchBar_searchInput" type = "text" onChange={fetchResults} placeholder="Choose Book (Title / ISBN)"/>
                <BookAdderSearchResults results={results}/>
            </BookAdderSearchBarContext.Provider>
        )
     }
  
}

export default BookAdderSearchBar