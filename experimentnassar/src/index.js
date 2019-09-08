import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main'
import Login from './components/Login'
import User from './components/User'
import Mail from './components/Mail'
import Details from './components/Details'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
const router=(
    <Router>
        <Route  path="/main" component={Main}></Route>
        <Route  path="/Login" component={Login}></Route>
        <Route path="/user"   component={User}></Route>
        <Route path="/abc"    component={Mail}></Route>
        <Route path="/getdetails" component={Details}></Route>
         <li><Link to="/main">Phones</Link></li>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
