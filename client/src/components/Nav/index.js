import React from 'react';
import './style.css';

function Nav(){
    return(
        <nav className="navbar">
            <a className="navbar-brand text-center" href="/">Google Books Library</a>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Saved</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;