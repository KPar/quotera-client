import React, { useContext } from 'react'
import {BookAdderContext} from "./BookAdder"
import BookAdderListItem from './BookAdderListItem';

function BookAdderSearchResults({results}) {

    const {setIsBookSelected, setSelection} = useContext(BookAdderContext);
    
    if(!(results === undefined || results.length===0)){
        return (
            <div id = "BookAdderSearchBar_results">
                {results.map(result => {
                    return (
                        <BookAdderListItem key = {result.bookID} result = {result} setSelection = {setSelection} setIsBookSelected = {setIsBookSelected}/>
                    )
                })}
            </div>
        )
    }
  
}

export default BookAdderSearchResults