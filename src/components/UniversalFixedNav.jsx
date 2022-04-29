import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from "../components/SearchBar"

function UniversalFixedNav() {

  const [isUserAuth, setIsUserAuth] = useState();
  const [isHomePage, setIsHomePage] = useState();
  const [isCreateOrEditPage, setIsCreateOrEditPage] = useState();

  const styles = {
    navContainer: {
      position: "fixed",
      top: "0",
      width: "100%",
      height: "100px",
      boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.2)",
      borderBottom: "solid 0.5px rgb(226, 226, 226)",
      backgroundColor: "white",
      display: isCreateOrEditPage? "none":"block"
    },
    nav: {
      height:"100%",
      width: "70vw",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }

  const location = useLocation()
  const navigate = useNavigate();
  const searchRef = useRef();

  const goToSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }

  const goToHome = () => {
    navigate(`/`);
  }

  const goToLogIn = () => {
    navigate(`/log-in`);
  }

  const goToSignUp = () => {
    navigate(`/sign-up`);
  }

  const goToCreateReflection = () => {
    navigate(`/new-reflection`);
  }


  //this will handle changing state based on current route, which will in turn affect rendering of components
  useEffect(() => {
    console.log('Route changed to:', location)
    //fetch user isAuthenticated() route boolean 
    setIsUserAuth(false);
    location.pathname === "/"? setIsHomePage(true) : setIsHomePage(false);
    location.pathname.includes("/edit/") || location.pathname.includes("/new-book-summary")? setIsCreateOrEditPage(true) : setIsCreateOrEditPage(false);


  }, [location]);

  return (
    <div style={styles.navContainer}>
      <div style={styles.nav} >
        <h1 onClick={goToHome} style={{cursor:'pointer'}}>Quotera</h1>
        <div style={{display: (isHomePage || isCreateOrEditPage? "none": "block")}}>
          <SearchBar/>
        </div>
        <button style={{display: isCreateOrEditPage? "block": "none" }}>Publish</button>
        <button onClick={goToCreateReflection} style={{display: isCreateOrEditPage? "none": "block" }}>Write</button>
        <div style={{display: isUserAuth? "none": "block"}}>
          <button onClick={goToLogIn}>Log In</button>
          <button onClick={goToSignUp}>Sign Up</button>
        </div>
        <div style={{display: isUserAuth? "block": "none"}}>
          <button>Log Out</button>
          <button>Settings</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default UniversalFixedNav