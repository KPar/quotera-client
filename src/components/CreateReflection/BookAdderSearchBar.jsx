import React, { useContext, useRef, useState } from 'react'
import "../../pages/CreateReflection/CreateReflection.css"
import {BookAdderContext} from "./BookAdder"
import BookAdderSearchResults from './BookAdderSearchResults';


function BookAdderSearchBar() {
    const {isBookSelected} = useContext(BookAdderContext);

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

     if(!isBookSelected){
         return (
            <div>
                <input ref={inputRef} id ="BookAdderSearchBar_searchInput" type = "text" onChange={fetchResults} placeholder="Title / ISBN..."/>
                <BookAdderSearchResults results={results}/>
            </div>
        )
     }
  
}

export default BookAdderSearchBar