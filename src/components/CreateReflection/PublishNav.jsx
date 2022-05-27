import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createReflectionContext } from '../../pages/CreateReflection/CreateReflection';
import "../../pages/CreateReflection/CreateReflection.css"

function PublishNav() {
     const {selectedBookID, getReflectionAndQuote} = useContext(createReflectionContext)
	   let {reflectionID} = useParams();
     const location = useLocation()

      const navigate = useNavigate();

      const goToHome = () => {
        navigate(`/`);
      }

      const publish = async () => {
        if(location.pathname.includes("/edit/")){
          const reflectionAndQuoteObject = getReflectionAndQuote();
          try {
            const requestOptions = {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                reflectionID: reflectionID,
                bookID: selectedBookID,
                quote: reflectionAndQuoteObject.quote,
                reflection: reflectionAndQuoteObject.reflection,
                category: 'other',
                isPublished: true
              }),
              credentials: 'include'
            };
            let res = await fetch(`http://localhost:5500/reflections/${reflectionID}`, requestOptions);
            let resStatus = res.status;
            if(resStatus===401 || resStatus===403 || resStatus===404) {
              alert('Unauthorized')
              navigate('/');
            }else if(resStatus===400){
              alert('Please include book!')
            } else{
              alert('Published!')

            }
          } catch (error) {
            console.log(error)
          }
        } else {
          const reflectionAndQuoteObject = getReflectionAndQuote();
          try {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                bookID: selectedBookID,
                quote: reflectionAndQuoteObject.quote,
                reflection: reflectionAndQuoteObject.reflection,
                category: 'other',
                isPublished: true         
              }),
              credentials: 'include'
            };
            let res = await fetch(`http://localhost:5500/reflections/`, requestOptions);
            let resStatus = res.status;
            if(resStatus===401 || resStatus===403 || resStatus===404) {
              alert('Unauthorized')
              navigate('/');
            }else if(resStatus===400){
              alert('Please include book!')
            } else{
              alert('Published!')

            }
          } catch (error) {
            console.log(error)

          }

        }
      }

  return (
    <div id="PublishNav_container">
      <div id="PublishNav_nav" >
        <h1 onClick={goToHome} style={{cursor:'pointer'}}>Quotera</h1>
        <button onClick={publish}>Publish</button>

      </div>
    </div>
  )
}

export default PublishNav