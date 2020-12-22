import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Login from '../pages/Login'
import Home from '../pages/Home'
import Desarollo from '../pages/Desarrollo'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/desarrollo" component={Desarollo}/>
      </Switch>
    </Router>
  );
}

export default Routes;
