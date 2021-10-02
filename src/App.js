import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home from './screens/home';
import Users from './screens/users';

const App = () => {

  return(
    <div className="main_app_container"> 
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </div>  
  )
}

export default (App);
