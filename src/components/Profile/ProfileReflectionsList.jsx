import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProfileReflectionListItem from './ProfileReflectionListItem';

function ProfileReflectionsList() {
    const [reflectionsList, setReflectionsList] = useState([]);
    let {userID} = useParams();
    const getReflections = async () => {
            try {
              let res = await fetch(`http://api.quotera.kennyparedes.com/reflections/users/${userID}`);
              if(res.status===404){
                setReflectionsList([])
              }else{
                let dataRes = await res.json();
                setReflectionsList(dataRes)
              }
            } catch (error) {
              
            }
          }
    useEffect(() => {
       //fetch data and assign to state
       
       getReflections()
       
    },[]);
    
   return (
    reflectionsList.map((listItem) => {
         return <ProfileReflectionListItem key = {listItem.reflection_id} listItem={listItem} getReflections={getReflections}/>        
       }) 
   )
}

export default ProfileReflectionsList