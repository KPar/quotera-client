import { useContext } from 'react'
import "../../pages/CreateReflection/CreateReflection.css"
import {BookAdderContext} from "./BookAdder"


function BookAdderListItem({result}) {

  const {isBookSelected, setIsBookSelected, setSelection} = useContext(BookAdderContext);

  const onBookSelection = () => {
    setSelection(result);
    setIsBookSelected(true);
  }

  return (
    <div id="BookAdderListItem" onClick={onBookSelection}>
        <div>{result.title}</div>
        <div>{result.author}</div>
        <div>{result.ISBN}</div>
    </div>
  )
}

export default BookAdderListItem