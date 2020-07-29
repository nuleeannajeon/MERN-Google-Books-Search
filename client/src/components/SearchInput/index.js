import React from 'react';
import './style.css';

function SearchInput(){
    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Insert Keyword to search books" />
            <div className="input-group-append">
                <button className="btn" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
}

export default SearchInput;