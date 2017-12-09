import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from './components/Accueil';
import About from './components/About';
import Archives from './components/Archives';
import Classement from './components/Classement';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import Navigation from './components/Navigation';
import Videos from './components/Videos';
import Leaders from './components/Leaders';
import Teams from './components/Team/Teams';
import TeamProfile from './components/Team/TeamProfile';
import Test from './components/Test';

import './styles/style.scss';

const routes = (
    <HashRouter>
        <div>
            <Navigation/>
            <div className="mainContainer">
            <Route exact path="/" component={Games} />
            <Route path="/stats/:gameid" component={GameDetail} />
            <Route path="/classement" component={Classement} />
            <Route path="/lead" component={Leaders} />
            <Route path="/teams" component={Teams} />
            <Route path="/archives" component={Archives} />
            <Route path="/about" component={About} />
            <Route path="/videos/:date/:q/:v/:h" component={Videos} />
            <Route path="/teamprofile/:id/:abrev" component={TeamProfile} />
            </div>
        </div>
    </HashRouter>
);

ReactDOM.render(routes, document.getElementById('app'));