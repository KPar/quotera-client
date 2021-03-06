import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from "../components/SearchBar"

function UniversalFixedNav() {

  const [isUserAuth, setIsUserAuth] = useState();
  const [isHomePage, setIsHomePage] = useState();
  const [isCreateOrEditPage, setIsCreateOrEditPage] = useState();
  const [userID, setUserID] = useState();
  const mobileButtonsContainer = useRef();

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
  const toggleRef = useRef();


  const goToSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchRef.current.value}`);
  }

  const goToHome = () => {
    navigate(`/`);
  }

  const goToLogIn = () => {
    navigate(`/log-in`);
    toggleRef.current.click();
  }

  const goToSignUp = () => {
    navigate(`/sign-up`);
    toggleRef.current.click();
  }

  const goToSettings = () => {
    navigate(`/settings`);
  }

  const goToProfile = () => {
    navigate(`/users/${userID}`);
    toggleRef.current.click();
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
      await fetch('https://apiquotera.kennyparedes.com/logout', requestOptions);
      navigate(`/`);
      toggleRef.current.click();
    } catch (err){
        console.log(err);
    }
  }

  const toggleMenu = () => {
    mobileButtonsContainer.current.classList.toggle("UniversalFixedNav_inactiveMenuNav");
  }

  
  //this will handle changing state based on current route, which will in turn affect rendering of components
  useEffect(() => {
    async function isAuthenticated(){
      try{
          let res = await fetch('https://apiquotera.kennyparedes.com/checkLoggedIn', {credentials: 'include'});
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
    <div id = "UniversalFixedNav_navContainer" style={{display: isCreateOrEditPage? "none":"block"}}>
      <div id = "UniversalFixedNav_nav" >
        <h1 id="UniversalFixedNav_logo" onClick={goToHome}>Quotera</h1>
        <div style={{display: (isHomePage? "none": "block")}}>
          <SearchBar/>
        </div>
        <button id='UniversalFixedNav_reflectButton' style={{display: (isUserAuth? "block": "none")}} onClick={goToCreateReflection}>Reflect</button>
        <div ref={mobileButtonsContainer} className='UniversalFixedNav_inactiveMenuNav'>
          <div className='UniversalFixedNav_buttonContainer' style={{display: (isUserAuth? "none": "flex")}}>
            <button className='UniversalFixedNav_button' onClick={goToLogIn}>Log In</button>
            <button className='UniversalFixedNav_button' onClick={goToSignUp}>Sign Up</button>
          </div>
          <div  className='UniversalFixedNav_buttonContainer' style={{display: isUserAuth? "flex": "none"}}>
            <button className='UniversalFixedNav_button' onClick={logOut}>Log Out</button>
            <button className='UniversalFixedNav_button' onClick={goToProfile}>Profile</button>
          </div>
        </div>
      </div>
      <div ref={toggleRef} id='UniversalFixedNav_toggle' onClick={toggleMenu}>
        <span className='UniversalFixedNav_toggleBar'></span>
        <span className='UniversalFixedNav_toggleBar'></span>
        <span className='UniversalFixedNav_toggleBar'></span>
      </div>
    </div>
  )
}

export default UniversalFixedNav