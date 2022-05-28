import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBarContext } from './SearchBar';

function HomeSearchBarListItem({result}) {
  const {setResults, inputRef} = useContext(SearchBarContext)

  const navigate = useNavigate();
  const onBookSelection = () => {
      navigate(`/search?id=${result.book_id}`);
      setResults([]);
      inputRef.current.value = "";
    }

  return (
    <div id="SearchBarListItem" onClick={onBookSelection}>
        <div>{result.title}</div>
        <div>By {result.author}</div>
        <div>ISBN: {result.isbn}</div>
    </div>
  )
}

export default HomeSearchBarListItem