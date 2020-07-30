import React from 'react';
import './style.css';

function SearchResult(props){
    const results = props.results;

    return(
        <ul className="list-unstyled mt-5">
            {results ? results.map(result => (
                <li className="media" key={result.id}>
                    <div className="media-body">
                        <a className="btn">Save</a>
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