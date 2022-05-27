import { useContext } from 'react'
import "../../pages/CreateReflection/CreateReflection.css"
import {BookAdderContext} from "./BookAdder"
import {createReflectionContext} from '../../pages/CreateReflection/CreateReflection'
import { BookAdderSearchBarContext } from './BookAdderSearchBar';


function BookAdderListItem({result}) {

  const {setIsBookSelected, setBookSelectionData} = useContext(BookAdderContext);
  const {setSelectedBookID} = useContext(createReflectionContext)
  const {setResults} = useContext(BookAdderSearchBarContext)


  const onBookSelection = () => {
    setResults([]);
    setBookSelectionData(result);
    setSelectedBookID(result.book_id);
    setIsBookSelected(true);
  }

  return (
    <div id="BookAdderListItem" onClick={onBookSelection}>
        <div>{result.title}</div>
        <div>{result.author}</div>
        <div>{result.isbn}</div>
    </div>
  )
}

export default BookAdderListItem