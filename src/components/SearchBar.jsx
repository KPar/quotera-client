import React, { createContext, useRef, useState } from 'react'
import SearchBarResults from './SearchBarResults';
import "../pages/Home/Home.css"

export const SearchBarContext = createContext()

function HomeSearchBar() {

    const inputRef = useRef();

    const [results, setResults] = useState();

    const fetchResults = async (e) => {
      inputRef.current.style.backgroundColor = "blue"
      if(inputRef.current.value.trim().length===0){
        setResults([]);
        return;
      }
      try{
          let res = await fetch(`https://quotera.herokuapp.com/books/q?data=${inputRef.current.value.trim()}`);
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
   
     const goToSearch = (event) => {
       event.preventDefault();
     }

  return (
    <form id="SearchBarContainer" onSubmit={goToSearch}>
        <input ref= {inputRef} id = "SearchBar_searchInput" type = "text" autoComplete='off' onChange={fetchResults} placeholder="Search by Book Title or ISBN"/>
        <SearchBarContext.Provider value={{setResults, inputRef}}>
          <SearchBarResults results={results}/>
        </SearchBarContext.Provider>
    </form>
  )
}

export default HomeSearchBar