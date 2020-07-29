import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
