import React, { useEffect, useState } from 'react'
import ProfileSummaryItem from './ProfileSummaryItem';

function ProfileSummariesList() {
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
         return <ProfileSummaryItem key = {summaryItem.summaryID} summaryItem={summaryItem}/>        
       }) 
   )
}

export default ProfileSummariesList