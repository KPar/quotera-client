import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../pages/CreateReflection/CreateReflection.css"

function PublishNav() {
    const styles = {
        navContainer: {
          position: "fixed",
          top: "0",
          width: "100%",
          height: "80px",
          borderBottom: "solid 1px",
          backgroundColor: "white",
        },
        nav: {
          width: "70vw",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }

      const navigate = useNavigate();

      const goToHome = () => {
        navigate(`/`);
      }

  return (
    <div id="PublishNav_container">
      <div id="PublishNav_nav" >
        <h1 onClick={goToHome} style={{cursor:'pointer'}}>Quotera</h1>
        <button>Publish</button>

      </div>
    </div>
  )
}

export default PublishNav