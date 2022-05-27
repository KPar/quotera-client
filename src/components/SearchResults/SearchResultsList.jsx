import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SearchResultItem from './SearchResultItem';

function SearchResultsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
      //fetch data and assign to state
      console.log();
      const getResults = async () => {
        try{
          let res = await fetch(`http://localhost:5500/reflections/books/${searchParams.get("id")}`);
          if(res.status===404){
            setSearchResults([])
          }else{
            let dataRes = await res.json();
            setSearchResults(dataRes)
          }
          
        } catch (err){
            console.log("k "+err);
        }
      }

      getResults()
   },[searchParams]);
   
  return (
      searchResults.map((searchResult) => {
        return <SearchResultItem key = {searchResult.reflection_id} searchResult={searchResult}/>        
      }) 

  )
}

export default SearchResultsList