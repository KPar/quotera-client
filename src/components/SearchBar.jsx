import React, { useRef, useState } from 'react'
import SearchBarResults from './SearchBarResults';
import "../pages/Home/Home.css"

function HomeSearchBar({SearchBarOrigin}) {

    let inputStyleId = ""
    switch (SearchBarOrigin) {
      case "Home":
        inputStyleId = "HomeSearchBar_searchInput"
        console.log("why")
        break;
      case "UniversalFixedNav":
        inputStyleId = "NavSearchBar_searchInput"
        break;
      default:
        console.log("j "+SearchBarOrigin)
        inputStyleId = "HomeSearchBar_searchInput"
        break;
    }

    const inputRef = useRef();

    const [results, setResults] = useState();

    const fetchResults = (e) => {
        // fetch with inputRef.current.value and setResults()
        setResults([
            {
                bookID: 1,
                ISBN: "1l-jjq",
                title: "Harry Potter",
                author: "jo"
              },
              {
                bookID: 2,
                ISBN: "1l-jjq",
                title: "Death Note",
                author: "joe"
              },
              {
                bookID: 3,
                ISBN: "1l-jjq",
                title: "Naruto",
                author: "joe b"
              },
              {
                bookID: 4,
                ISBN: "1l-jjq",
                title: "Death Note",
                author: "joe"
              },
              {
                bookID: 5,
                ISBN: "1l-jjq",
                title: "Naruto",
                author: "joe b"
              }
        ])
     }
   
     const goToSearch = (event) => {
       event.preventDefault();
     }

  return (
    <form id="SearchBarContainer" onSubmit={goToSearch}>
        <input ref= {inputRef} id = {inputStyleId} type = "text" onChange={fetchResults} placeholder="Title / ISBN..."/>
        <SearchBarResults results={results} SearchBarOrigin = {SearchBarOrigin}/>
    </form>
  )
}

export default HomeSearchBar