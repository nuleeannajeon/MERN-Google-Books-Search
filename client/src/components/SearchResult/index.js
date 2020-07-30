import React, {useState, useEffect} from 'react';
import './style.css';
import API from '../../utils/API';
// function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };
function SearchResult(props){
    const results = props.results;
    const [ saveBook, setSaveBook ] = useState({
        title: '',
        authors: '',
        description: '',
        image: '',
        link: ''
    })
    function saveSelectedBook(){
        console.log( `[saveSelectedBook]`)
        if (saveBook.title){
            API.saveBook({
                title: saveBook.title,
                authors: saveBook.authors,
                description: saveBook.description,
                image: saveBook.imageLinks,
                link: saveBook.previewLink
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }
    // useEffect( ()=>{
    //     saveSelectedBook()
    // }, [])
    return(
        <ul className="list-unstyled mt-5">
            {results ? results.map(result => (
                <li className="media" key={result.id}>
                    <div className="media-body">
                        <button className="btn" type="submit" 
                            onClick = {()=> {
                                setSaveBook({
                                    title: result.volumeInfo.title,
                                    authors: [result.volumeInfo.authors],
                                    description: result.volumeInfo.description,
                                    image: result.volumeInfo.imageLinks.smallThumbnail,
                                    link: result.volumeInfo.previewLink}
                                );
                                saveSelectedBook()} }>Save</button>
                        <a className="btn" href={result.volumeInfo.previewLink ? result.volumeInfo.previewLink : ''}>View</a>
                        <h5 className="mt-0 mb-1">{result.volumeInfo.title}</h5>
                        <p>Written by {result.volumeInfo.authors ? result.volumeInfo.authors : '...'}</p>
                        <img src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.smallThumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Q16_8YJF86qKsiRHDGSu2RzYtAcXtCsPOg&usqp=CAU'} className="mr-3" alt="..." />
                        <p>{result.volumeInfo.description ? result.volumeInfo.description : 'No Description Available'}</p>
                    </div>
                </li>
            )): ''}
        </ul>
    );
}

export default SearchResult;