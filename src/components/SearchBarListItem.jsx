import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeSearchBarListItem({result}) {

  const navigate = useNavigate();
  const onBookSelection = () => {
      navigate(`/search?id=${result.book_id}`);
    }

  return (
    <div id="SearchBarListItem" onClick={onBookSelection}>
        <div>{result.title}</div>
        <div>{result.author}</div>
        <div>{result.isbn}</div>
    </div>
  )
}

export default HomeSearchBarListItem