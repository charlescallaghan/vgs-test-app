import './App.css';
import Nav from './components/Nav';
import CollectForm from './components/CollectForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={CollectForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;