import React, { useRef, useState } from 'react'
import BookAdderListItem from './BookAdderListItem';
import "../../pages/CreateReflection/CreateReflection.css"
import { createContext, useContext } from 'react';
import BookAdderSearchBar from './BookAdderSearchBar';
import BookAdderSelection from './BookAdderSelection';

export const BookAdderContext = createContext();

function BookAdder() {

    const [selection, setSelection] = useState();

    const [isBookSelected,setIsBookSelected] = useState(false);

    

  return (
    <div id="BookAdder_containter">
        <BookAdderContext.Provider value = {{isBookSelected, setIsBookSelected, selection, setSelection}}>
            <BookAdderSearchBar/>
            <BookAdderSelection/>
        </BookAdderContext.Provider>
    </div>
  )
}

export default BookAdder
