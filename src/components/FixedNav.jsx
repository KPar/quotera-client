import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function FixedNav() {
  const styles = {
    navContainer: {
      position: "fixed",
      top: "0",
      width: "100%",
      height: "80px",
      borderBottom: "solid 1px",
      backgroundColor: "white"
    },
    nav: {
      width: "70vw",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }
  const [isUserAuth, setIsUserAuth] = useState();
  const [isHomePage, setIsHomePage] = useState();
  const [isEditPage, setIsEditPage] = useState();

  const location = useLocation()
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }


  //this will handle changing state based on current route, which will in turn affect rendering of components
  useEffect(() => {
    console.log('Route changed to:', location)
    //fetch user isAuthenticated() boolean 
    setIsUserAuth(true);
    location.pathname === "/"? setIsHomePage(true) : setIsHomePage(false);
    location.pathname.includes("/edit/") ? setIsEditPage(true) : setIsEditPage(false);


  }, [location]);

  return (
    <div style={styles.navContainer}>
      <div style={styles.nav} >
        <h1>ReadSum</h1>
        <form style={{display: (isHomePage || isEditPage? "none": "block")}} onSubmit={handleSubmit}>
          <input ref={searchRef} type="search" name="search" placeholder="Title / ISBN ..."/>
          <input type="submit" value="Search"/>
        </form>
        <button style={{display: isEditPage? "block": "none" }}>Publish</button>
        <button style={{display: isEditPage? "none": "block" }}>Write</button>
        <div style={{display: isUserAuth? "none": "block"}}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
        <div style={{display: isUserAuth? "block": "none"}}>
          <button>Log Out</button>
          <button>Settings</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default FixedNav