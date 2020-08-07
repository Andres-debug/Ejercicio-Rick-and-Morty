import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Principal from './pages/Home/Principal';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/principal">
          <Principal/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
