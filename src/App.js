import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage.js';

class App extends Component {
  render(){
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}
}

export default App;
