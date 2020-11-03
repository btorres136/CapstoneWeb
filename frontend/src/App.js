import React from 'react';
import './resources/SCSS/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLoader from './components/MainLoader';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={MainLoader} />
      <Route exact path='/Dashboard' component={Dashboard} />
      <Route exact path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
