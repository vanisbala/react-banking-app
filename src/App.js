import React from 'react';
import './App.css';
import UserContext from './usercontext';

import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Createaccount from './components/createaccount';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';
import Alldata from './components/alldata';
import Logout from './components/logout';

function App() {
  return (
    <HashRouter>
          {/* <Navbar/> */}
          <UserContext.Provider value = {{users:[{name:'admin', email:'admin@gmail.com', password:'hello123', balance:100, active:true}]}}>
              <Navbar/>
              <Route path="/" exact component= {Home} />
              <Route path="/createaccount/" component = {Createaccount} />
              <Route path="/login/" component= {Login} />
              <Route path="/deposit/" component = {Deposit} />
              <Route path = "/withdraw/" component = {Withdraw} />
              <Route path = "/alldata/" component = {Alldata} />
              <Route path = "/logout/" component = {Logout} />
          </UserContext.Provider>
      </HashRouter>
  );
}

export default App;
