import React from 'react';
import './App.css';
import Search from './pages/Search';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Search />
    </div>
  );
}

export default App;
