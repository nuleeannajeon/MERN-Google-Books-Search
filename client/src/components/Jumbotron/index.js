import React from 'react';
import './style.css';

function Jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container jumbotronText text-right">
                <h1 className="">Welcome to My Library</h1>
                <h3 className="">Start Now to search and save your favourite books!</h3>
            </div>
        </div>
    );
}

export default Jumbotron;