import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeSearchBarListItem({result, SearchBarOrigin}) {

  let listItemStyleId = ""
  switch (SearchBarOrigin) {
    case "Home":
      listItemStyleId = "HomeSearchBarListItem"
      console.log("why")

      break;
    case "UniversalFixedNav":
      listItemStyleId = "NavSearchBarListItem"
      break;
    default:
      listItemStyleId = "HomeSearchBar_results"
      break;
  }

  const navigate = useNavigate();
  const onBookSelection = () => {
      navigate(`/search?id=${result.bookID}`);
    }

  return (
    <div id={listItemStyleId} onClick={onBookSelection}>
        <div>{result.title}</div>
        <div>{result.author}</div>
        <div>{result.ISBN}</div>
    </div>
  )
}

export default HomeSearchBarListItem