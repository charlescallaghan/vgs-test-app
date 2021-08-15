import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CollectForm from './components/CollectForm';
import RevealForm from './components/RevealForm';
import Store from './Store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Store>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact>
              <CollectForm />
            </Route>
            <Route path='/reveal' exact>
              <RevealForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;