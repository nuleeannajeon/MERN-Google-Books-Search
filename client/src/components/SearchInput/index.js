import React from 'react';
import './style.css';

function SearchInput(props){
    return(
        <form className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Keyword to search books" onChange={props.handleInputChange}/>
            <div className="input-group-append">
                <button className="btn" type="button" id="button-addon2" onClick={props.handleFormSubmit}>Search</button>
            </div>
        </form>
    );
}

export default SearchInput;