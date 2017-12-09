import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top pimpmy_navbar">
            <h1 className="navbar-brand pimpmy_brand">NBA Quotidien</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pimpmy_menu" id="navbarNavAltMarkup">
                <div className="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
                <li><NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Live</NavLink></li>
                <li><NavLink exact to="/classement" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Classement</NavLink></li>
                <li><NavLink exact to="/lead" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Performances</NavLink></li>
                <li><NavLink exact to="/teams" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Equipes</NavLink></li>
                <li><NavLink exact to="/archives" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Archives</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>A propos</NavLink></li>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;
