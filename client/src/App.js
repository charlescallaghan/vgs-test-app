import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CollectForm from './components/CollectForm';
import RedactForm from './components/RedactForm';
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
            <Route path='/redact' exact>
              <RedactForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;