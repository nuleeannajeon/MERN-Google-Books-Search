import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/SearchResult';

function Search(){
  const[ bookSearch, setBookSearch ] = useState('');
  const[ results, setResults ] = useState();
    async function getGoogleBooksData() {
        try {
          const response = await API.getGoogleBook(bookSearch)
          console.log( response )
          //Get required info
          setResults(response.data.items);
        } catch (error) {
          console.error(error);
        }
    };

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