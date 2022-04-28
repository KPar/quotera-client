import React, { useRef, useState } from 'react'
import SearchBarResults from './SearchBarResults';
import "../pages/Home/Home.css"

function HomeSearchBar() {

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
        <input ref= {inputRef} id = "SearchBar_searchInput" type = "text" onChange={fetchResults} placeholder="Title / ISBN..."/>
        <SearchBarResults results={results}/>
    </form>
  )
}

export default HomeSearchBar