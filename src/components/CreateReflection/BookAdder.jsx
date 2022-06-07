import React, { useEffect, useRef, useState } from 'react'
import "../../pages/CreateReflection/CreateReflection.css"
import { createContext, useContext } from 'react';
import BookAdderSearchBar from './BookAdderSearchBar';
import BookAdderSelection from './BookAdderSelection';
import {createReflectionContext} from '../../pages/CreateReflection/CreateReflection'
import { useLocation } from 'react-router-dom';

export const BookAdderContext = createContext();

function BookAdder() {
    const location = useLocation()
    const {selectedBookID} = useContext(createReflectionContext)
    const [bookSelectionData, setBookSelectionData] = useState({});
    const [isBookSelected,setIsBookSelected] = useState(false);
 


    useEffect(() => {
      console.log("book id: "+selectedBookID)    
      const setBook = async () => {
        try {
          let res = await fetch(`http://api.quotera.kennyparedes.com/books/id/${selectedBookID}`);
            if(res.status===404){
              setBookSelectionData({})
            }else{
              let dataRes = await res.json();   
              console.log("datares: "+dataRes.title)
              setBookSelectionData(dataRes);
            }
        } catch (error) {
          console.log(error);
        }
     }

      if(location.pathname.includes("/edit/")){
        setIsBookSelected(true);
        setBook();
      }

    },[location.pathname, selectedBookID])
    

  return (
  <div id="BookAdder_containter">
       <BookAdderContext.Provider value = {{isBookSelected, setIsBookSelected, bookSelectionData, setBookSelectionData}}>
            <BookAdderSearchBar/>
            <BookAdderSelection/>
        </BookAdderContext.Provider>
    </div>
  )
}

export default BookAdder
