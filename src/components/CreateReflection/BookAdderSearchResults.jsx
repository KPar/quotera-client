import React, { useContext } from 'react'
import {BookAdderContext} from "./BookAdder"
import BookAdderListItem from './BookAdderListItem';

function BookAdderSearchResults({results}) {
    
    if(!(results === undefined || results.length===0)){
        return (
            <div id = "BookAdderSearchBar_results">
                {results.map(result => {
                    return (
                        <BookAdderListItem key = {result.book_id} result = {result}/>
                    )
                })}
            </div>
        )
    }
  
}

export default BookAdderSearchResults