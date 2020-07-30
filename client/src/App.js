import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Jumbotron />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/books">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;