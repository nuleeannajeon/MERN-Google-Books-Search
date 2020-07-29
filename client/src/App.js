import React from 'react';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Search />
      <Saved />
    </div>
  );
}

export default App;
