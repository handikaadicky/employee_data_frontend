import React from 'react';
import './App.css';
import {Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import User from './pages/User'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>|  
        <Link to="/user">User</Link>|
        <Link to="/user/new">User New</Link>
        
        <br/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/user">
              <User/>
            </Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
