import {useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import "../Home/Home.css"

function Home() {

  let navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }
  
  return (
    <div id="Home_container">
      <div id="Home_contentContainer">
        <h1 id="Home_siteName">Quotera</h1>
        <SearchBar/>
      </div>
    </div>
    
    
  )
}

export default Home