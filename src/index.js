import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HideData from './Components/HideDataSubComponents/HideData';
import RevealData from './Components/RevealDataSubComponent/RevealData';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


//basename={process.env.REACT_APP_ROUTER_BASE || ''}
// <h1>{process.env.REACT_APP_ROUTER_BASE}</h1>
const routing = (
  <Router basename={process.env.PUBLIC_URL}>
   
      <Route exact path="/" component={App} />
      <Route path="/HideData" component={HideData} />
      <Route path="/RevealData" component={RevealData} />
    
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
