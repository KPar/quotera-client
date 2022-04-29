import React, { useRef, useState } from 'react'
import BookAdderListItem from './BookAdderListItem';
import "../../pages/CreateReflection/CreateReflection.css"
import { createContext, useContext } from 'react';
import BookAdderSearchBar from './BookAdderSearchBar';
import BookAdderSelection from './BookAdderSelection';

export const BookAdderContext = createContext();

function BookAdder() {
    const styles = {
        containter: {
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            margin: "auto",        
        },

        searchBar: {
            width: "50vw",
            fontSize: "20px",
            outline: "none",
            border: "none",
            padding: "10px",
            backgroundColor: "white",
            margin: "10px auto",
            borderBottom: "solid"


        },
        results: {
            height:"100px",
            width: "50vw",
            padding: "10px",
            overflow: "hidden",
            overflowY: "auto",
            backgroundColor: "white",
            cursor: "pointer",
            margin: "10px auto",
            border: "solid"
        }
    }
//            boxShadow: "rgba(0,0,0,0.35) 0px 5px 20px",

    const [selection, setSelection] = useState();

    const [isBookSelected,setIsBookSelected] = useState(false);

    

  return (
    <div style={styles.containter}>
        <h1 style={{textAlign: "center"}}>Book Selection</h1>
        <BookAdderContext.Provider value = {{isBookSelected, setIsBookSelected, selection, setSelection}}>
            <BookAdderSearchBar/>
            <BookAdderSelection/>
        </BookAdderContext.Provider>
    </div>
  )
}

export default BookAdder

/*
 <div style={{display: isBookSelected? "none":"block"}}>
            <input ref={inputRef} style={styles.searchBar} type = "text" onChange={fetchResults} placeholder="Title / ISBN..."/>
            <div style={styles.results}>
                {results.map(result => {
                    return (
                        <BookAdderListItem key = {result.bookID} result = {result} setSelection = {setSelection} setIsBookSelected = {setIsBookSelected}/>
                    )
                })}
            </div>
        </div>

        <div style={{display: isBookSelected? "block":"none"}}>
            <div style={{display:"flex"}}>
                <div style={{height:"100px", width:"70px", backgroundColor:"blue"}}>image</div>
                <div>
                    <p >TitleTitleTitleTitleTitleTitleTitleTitle</p>
                    <p>By author</p>
                    <p>ISBN</p>
                </div>
            </div>
            <button style={{width: "fit-content" }}>Change</button>
        </div>
        */