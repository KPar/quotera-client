import {useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import "../Home/Home.css"

function Home() {

  let navigate = useNavigate();
  const searchRef = useRef();
  const [isPopUp,setIsPopUp] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }

  const closeDescPopUp = (e) => {
    setIsPopUp(false);
  }
  
  return (
    <div>
      <div id="Home_descPopUp" onClick={closeDescPopUp} style={{display: isPopUp? "block":"none"}}>
            <p>Welcome! On Quotera you can:</p>
            <ul>
              <li>Create and login to encrypted password protected accounts</li>
              <li>Post, read, edit, and delete reflections</li>
              <li>Search reflections on certain books by title or ISBN (Try searching "Harry Potter")</li>
              <li>View user profiles which display all reflections that user has posted</li>
            </ul>
            <p>What's a reflection?</p>
            <ul>
              <li>It's a response to a quote from a book</li>
            </ul>
            <b>Click to Close</b>
      </div>
      <div id="Home_contentContainer">
        <div id="Home_container">
          <h1 id="Home_siteName">Quotera</h1>
          <SearchBar/>
        </div>
      </div>
    </div>
    
  )
}

export default Home