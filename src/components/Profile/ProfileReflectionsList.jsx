import React, { useEffect, useState } from 'react'
import ProfileReflectionListItem from './ProfileReflectionListItem';

function ProfileReflectionsList() {
    const [summariesList, setSummariesList] = useState([]);

    useEffect(() => {
       //fetch data and assign to state
       setSummariesList([
           {
            summaryID: 1,
            bookTitle: "Tom",
            author: "Jane"
           },
           {
            summaryID: 2,
            bookTitle: "Tom",
            author: "Jane"
           },
           {
            summaryID: 3,
            bookTitle: "Tom",
            author: "Jane"
           },
         ])
    },[]);
    
   return (
    summariesList.map((summaryItem) => {
         return <ProfileReflectionListItem key = {summaryItem.summaryID} summaryItem={summaryItem}/>        
       }) 
   )
}

export default ProfileReflectionsList