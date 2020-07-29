import React, {useEffect} from 'react';
import API from '../utils/API';
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/SearchResult';

function Search(){
    async function getGoogleBooksData() {
        try {
          const response = await API.getGoogleBook('Flower');
          console.log( response )
          //Get required info
          const results = response.data.items.forEach( result=> (
            console.log( `Title: ${result.volumeInfo.title}, 
              Author(s): ${result.volumeInfo.authors},
              description: ${result.volumeInfo.description}, 
              Image: ${result.volumeInfo.imageLinks.smallThumbnail},
              Link: ${result.volumeInfo.previewLink}` )
          ))
        } catch (error) {
          console.error(error);
        }
      };
    
    useEffect( ()=>{
        getGoogleBooksData()
    }, [])
    
    return(
        <div className="container">
            <SearchInput />
            <SearchResult />
        </div>
    );
}

export default Search;