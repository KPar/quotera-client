import React, { useContext } from 'react'
import {BookAdderContext} from "./BookAdder"

function BookAdderSelection() {

  const {isBookSelected, setIsBookSelected, selection, setSelection} = useContext(BookAdderContext);

  const onChangeBtn = () => {
    setIsBookSelected(false);
    setSelection({});
  }

  if(isBookSelected){
    return (
        <div>
                <div style={{display:"flex"}}>
                    <img style={{height:"70px", width:"70px" }} alt = "Book Cover"/>
                    <div>
                        <p>{selection.title}</p>
                        <p>{selection.author}</p>
                        <p>{selection.ISBN}</p>
                    </div>
                </div>
                <button style={{width: "fit-content" }} onClick={onChangeBtn}>Change</button>
            </div>
      )
  }
  
}

export default BookAdderSelection