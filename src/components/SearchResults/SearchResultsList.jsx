import { useEffect, useState } from 'react'
import SearchResultItem from './SearchResultItem';

function SearchResultsList() {
   const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
      //fetch data and assign to state

      const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. nt feugiat mi. Ut dolor elit, varius non lectus vel, tincidunt efficitur orci. Praesent fermentum ullamcorper nibh quis convallis. Donec vel est quis est interdum facilisis. Vivamus porta odio eu urna interdum, at consequat dolor egestas. Aliquam lacinia commodo magna, a auctor libero interdum non. Etiam sagittis justo sit amet erat fringilla, a laoreet sem suscipit. Nulla vulputate velit hendrerit mauris ornare, eget eleifend orci accumsan. Donec libero ante, viverra sed nisi id, sollicitudin vulputate erat. Morbi consectetur justo enim, quis porttitor est dapibus vitae. Pellentesque suscipit ex at nisl efficitur, eget gravida est efficitur. Morbi scelerisque pretium iaculis. Pellentesque massa lacus, laoreet non sollicitudin ut, placerat ut justo. Vivamus congue, lectus vitae convallis laoreet, augue metus varius eros, sit amet sodales risus felis non tellus. Ut ultricies quam id finibus sagittis. Cras porttitor augue vitae tortor tempor fermentum id eget diam. Maecenas feugiat arcu arcu, sit amet consequat tortor accumsan a. Curabitur nibh tellus, condimentum vitae magna nec, mattis laoreet tellus. Donec pharetra magna scelerisque, rutrum massa a, hendrerit quam. Nunc tempor auctor pellentesque. Proin pellentesque neque in magna ultricies, et rutrum enim mollis. Etiam quis lorem risus. Phasellus posuere mi sed ultrices venenatis. Duis faucibus erat magna, eu malesuada elit sagittis sed. Vivamus eget dignissim velit, sed pretium nibh. Mauris semper porttitor ante, quis blandit sapien pellentesque non. Aliquam fermentum ipsum quis porta commodo. In hac habitasse platea dictumst. Proin ac est suscipit velit commodo eleifend. Fusce id sem vitae nisl vulputate hendrerit."
        
      setSearchResults([
          {
            bookSummaryID: 1,
            username: "Tom",
            content: lorem      
          },
          {
            bookSummaryID: 2,
            username: "Jennifer",
            content: lorem
          },
          {
            bookSummaryID: 3,
            username: "Sophia",
            content: lorem
          },
        ])
   },[]);
   
  return (
      searchResults.map((searchResult) => {
        return <SearchResultItem key = {searchResult.bookSummaryID} searchResult={searchResult}/>        
      }) 

  )
}

export default SearchResultsList