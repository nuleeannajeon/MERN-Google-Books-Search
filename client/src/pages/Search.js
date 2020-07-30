import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/SearchResult';

function Search(){
  const[ bookSearch, setBookSearch ] = useState('google');
  const[ results, setResults ] = useState();
    async function getGoogleBooksData() {
        try {
          const response = await API.getGoogleBook(bookSearch);
          console.log( response )
          //Get required info
          // const thisResult = response.data.items.forEach( result=> (
          //   console.log( `Title: ${result.volumeInfo.title}, 
          //     Author(s): ${result.volumeInfo.authors},
          //     description: ${result.volumeInfo.description}, 
          //     Image: ${result.volumeInfo.imageLinks.smallThumbnail},
          //     Link: ${result.volumeInfo.previewLink}` )
          // ))
          setResults(response.data.items);
        } catch (error) {
          console.error(error);
        }
    };
    // console.log( results )
    // useEffect( ()=>{
    //     getGoogleBooksData()
    // }, [])
  
    function handleInputChange(event){
      console.log(`[handleInputChange]`);
      setBookSearch(event.target.value);
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      console.log(`[handleFormSubmit] Searching for ${bookSearch}`)
      getGoogleBooksData()
    }

    return(
        <div className="container">
            <SearchInput handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
            <SearchResult results={results}/>
        </div>
    );
}

export default Search;