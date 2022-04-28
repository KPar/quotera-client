import React from 'react'
import HomeSearchBarListItem from './SearchBarListItem'

function HomeSearchBarResults({results, SearchBarOrigin}) {
    let resultsStyleId = ""
    switch (SearchBarOrigin) {
      case "Home":
        resultsStyleId = "HomeSearchBar_results"
        console.log("why")
        break;
      case "UniversalFixedNav":
        resultsStyleId = "NavSearchBar_results"
        break;
      default:
        resultsStyleId = ""
        break;
    }

    if(!(results === undefined || results.length===0)){
        return (
            <div id = {resultsStyleId}>
                {results.map(result => {
                    return (
                        <HomeSearchBarListItem key = {result.bookID} result = {result} SearchBarOrigin = {SearchBarOrigin}/>
                    )
                })}
            </div>
        )
    }
}

export default HomeSearchBarResults