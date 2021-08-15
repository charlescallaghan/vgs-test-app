import './App.css';

import Nav from './components/Nav';
import CollectForm from './components/CollectForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <CollectForm />
      </header>
    </div>
  );
}

export default App;