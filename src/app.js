import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from './components/Accueil';
import Archives from './components/Archives';
import Classement from './components/Classement';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import Navigation from './components/Navigation';

import './styles/style.scss';

const routes = (
    <HashRouter>
        <div>
            <Navigation/>
            <div className="mainContainer">
            <Route exact path="/" component={Games} />
            <Route path="/stats/:gameid" component={GameDetail} />
            <Route path="/classement" component={Classement} />
            <Route path="/archives" component={Archives} />
            </div>
        </div>
    </HashRouter>
);

ReactDOM.render(routes, document.getElementById('app'));