import { Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home/home.css"

function Home() {
  let navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }
  
  return (
    <Fragment>
      <div id="wrapper">
        <Link to = "/sign-in"> Sign In </Link>
        <Link to = "/sign-up"> Sign Up </Link>

        <h1 id="siteName">ReadSum</h1>
        <form onSubmit={handleSubmit}>
          <input ref={searchRef} type="search" name="search" placeholder="Title / ISBN ..."/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    </Fragment>
    
    
  )
}

export default Home