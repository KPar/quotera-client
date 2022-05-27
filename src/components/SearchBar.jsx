import React, { useRef, useState } from 'react'
import SearchBarResults from './SearchBarResults';
import "../pages/Home/Home.css"

function HomeSearchBar() {

    const inputRef = useRef();

    const [results, setResults] = useState();

    const fetchResults = async (e) => {
      if(inputRef.current.value.trim().length===0){
        setResults([]);
        return;
      }
      try{
          let res = await fetch(`http://localhost:5500/books/q?data=${inputRef.current.value.trim()}`);
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
        <input ref= {inputRef} id = "SearchBar_searchInput" type = "text" onChange={fetchResults} placeholder="Search by Book Title or ISBN"/>
        <SearchBarResults results={results}/>
    </form>
  )
}

export default HomeSearchBar