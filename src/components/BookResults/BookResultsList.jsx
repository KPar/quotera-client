import { useEffect, useState } from 'react'
import BookResultItem from './BookResultItem'

function BookResultsList() {
   const [bookResults, setBookResults] = useState([]);

   useEffect(() => {
      //fetch data and assign to state
      setBookResults([
          {
            bookID: 1,
            ISBN: "1l-jjq",
            title: "How to Not Die Alone",
            author: "jo"
          },
          {
            bookID: 2,
            ISBN: "1l-jjq",
            title: "Death Note",
            author: "joe"
          },
          {
            bookID: 3,
            ISBN: "1l-jjq",
            title: "Naruto",
            author: "joe b"
          },
        ])
   },[]);
   
  return (
      bookResults.map((bookResult) => {
        return <BookResultItem key = {bookResult.bookID} bookResult={bookResult}/>        
      }) 

  )
}

export default BookResultsList