import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from "../components/SearchBar"

function UniversalFixedNav() {

  const [isUserAuth, setIsUserAuth] = useState();
  const [isHomePage, setIsHomePage] = useState();
  const [isCreateOrEditPage, setIsCreateOrEditPage] = useState();
  const [userID, setUserID] = useState();

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

  const goToSettings = () => {
    navigate(`/settings`);
  }

  const goToProfile = () => {
    navigate(`/users/${userID}`);
  }

  const goToCreateReflection = () => {
    navigate(`/new-reflection`);
  }

  const logOut = async () => {
    try{
      const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
      };
      await fetch('http://localhost:5500/logout', requestOptions);
      navigate(`/`);
    } catch (err){
        console.log(err);
    }
  }

  
  //this will handle changing state based on current route, which will in turn affect rendering of components
  useEffect(() => {
    async function isAuthenticated(){
      try{
          let res = await fetch('http://localhost:5500/checkLoggedIn', {mode:'cors', credentials: 'include'});
          let dataRes = await res.json();
          setIsUserAuth(dataRes.isAuthenticated)
          setUserID(dataRes.userID);
      } catch (err){
          console.log(err);
      }
    }
    isAuthenticated();
    console.log('Route changed to:', location)
    location.pathname === "/"? setIsHomePage(true) : setIsHomePage(false);
    location.pathname.includes("/edit/") || location.pathname.includes("/new-reflection")? setIsCreateOrEditPage(true) : setIsCreateOrEditPage(false);


  }, [location]);

  return (
    <div style={styles.navContainer}>
      <div style={styles.nav} >
        <h1 id="UniversalFixedNav_logo" onClick={goToHome}>Quotera</h1>
        <div style={{display: (isHomePage? "none": "block")}}>
          <SearchBar/>
        </div>
        <button id='UniversalFixedNav_reflectButton' onClick={goToCreateReflection}>Reflect</button>
        <div style={{display: (isUserAuth? "none": "block")}}>
          <button id='UniversalFixedNav_button' onClick={goToLogIn}>Log In</button>
          <button id='UniversalFixedNav_button' onClick={goToSignUp}>Sign Up</button>
        </div>
        <div style={{display: isUserAuth? "block": "none"}}>
          <button id='UniversalFixedNav_button' onClick={logOut}>Log Out</button>
          <button id='UniversalFixedNav_button' onClick={goToProfile}>Profile</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default UniversalFixedNav