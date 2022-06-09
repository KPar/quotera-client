import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SearchResultsList from '../../components/SearchResults/SearchResultsList'
import "../SearchResults/SearchResults.css"

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [book, setBook] = useState([]);

  useEffect(()=>{
    const getBook = async () => {
      try{
        let res = await fetch(`https://apiquotera.kennyparedes.com/books/id/${searchParams.get("id")}`);
        if(res.status===404){
          setBook([])
        }else{
          let dataRes = await res.json();
          setBook(dataRes)
        }
        
      } catch (err){
          console.log(err);
      }
    }
    getBook();
  },[searchParams])


  return (
    <div id='SearchResults_container'>
      <h1 id="SearchResults_heading">Reflections for {book.title} by {book.author}</h1>
      <SearchResultsList/>
    </div>
  )
}

export default SearchResults