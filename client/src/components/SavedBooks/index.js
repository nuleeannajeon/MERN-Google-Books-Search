import React from 'react';
import './style.css';

function SavedBooks(){
    return(
        <div>
        <h4>Saved Books</h4>
        <ul className="list-unstyled">
            <li className="media">
                <div className="media-body">
                    <button>Delete</button>
                    <button>View</button>
                    <h5 className="mt-0 mb-1">Harry Potter and the Philosopher</h5>
                    <p>Written by Authors</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" className="mr-3" alt="..." />
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </li>
        </ul>
        </div>
    );
}

export default SavedBooks;