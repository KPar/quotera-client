import {useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const styles = {
    container: {
      width: "100%",
      marginTop:"100px"
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