import React, { useContext, useEffect } from 'react'
import {BookAdderContext} from "./BookAdder"
import {createReflectionContext} from '../../pages/CreateReflection/CreateReflection'
import '../../pages/CreateReflection/CreateReflection.css'

function BookAdderSelection() {

  const {isBookSelected, setIsBookSelected, bookSelectionData, setBookSelectionData} = useContext(BookAdderContext);

  const onChangeBtn = () => {
    setIsBookSelected(false);
    setBookSelectionData({});
  }

  if(isBookSelected){
    return (
        <div>
            <div id="BookAdderSelection_bookContainer">
                <div id="BookAdderSelection_bookImageContainer">
                  <img style={{borderRadius:"10px"}} id="BookAdderSelection_bookImage" alt="bookCover" src={`https://covers.openlibrary.org/b/isbn/${bookSelectionData.isbn}-M.jpg`}/>
                </div>                    
                <div id='BookAdderSelection_bookText'>
                    <p>{bookSelectionData.title}</p>
                    <p>{bookSelectionData.author}</p>
                    <p>{bookSelectionData.isbn}</p>
                </div>
                <div>
                  <button id='BookAdderSelection_changeButton' onClick={onChangeBtn}>Change</button>
                </div>
            </div>
            
            
          </div>
      )
  }
  
}

export default BookAdderSelection