import {useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const styles = {
    container: {
      width: "100%"
    },
    contentContainer: {
      textAlign: "center"
    },
    siteName : {
      fontSize: "90px",
      fontFamily: "Open Sans, sans-serif"
    }
  }

  let navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }
  
  return (
    <div style={styles.container}>
      <Link to = "/sign-in"> Sign In </Link>
      <Link to = "/sign-up"> Sign Up </Link>
      <button>Write</button>
      <div style={styles.contentContainer}>
        <h1 style={styles.siteName}>ReadSum</h1>
        <form onSubmit={handleSubmit}>
          <input ref={searchRef} type="search" name="search" placeholder="Title / ISBN ..."/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    </div>
    
    
  )
}

export default Home