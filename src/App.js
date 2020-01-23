import React from 'react';
import './App.css';
import Header from './Pages/Header'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Process from './Pages/Process'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  return (
    <div className="App">
      <BaseContextProvider>
      <Header />
        <Home />
        {/* <Process /> */}
        {/* <Landing /> */}
        {/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router> */}
      </BaseContextProvider>
    </div>
  );
}

export default App;
