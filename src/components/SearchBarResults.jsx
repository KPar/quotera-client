import React from 'react'
import HomeSearchBarListItem from './SearchBarListItem'

function HomeSearchBarResults({results}) {

    if(!(results === undefined || results.length===0)){
        return (
            <div id = "SearchBar_results">
                {results.map(result => {
                    return (
                        <HomeSearchBarListItem key = {result.book_id} result = {result}/>
                    )
                })}
            </div>
        )
    }
}

export default HomeSearchBarResults