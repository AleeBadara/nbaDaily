import React from 'react';


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark pimpmy_navbar">
            <h1 className="navbar-brand pimpmy_brand">Daily NBA</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pimpmy_menu" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Score <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Calendrier</a>
                    <a className="nav-item nav-link" href="#">Archives</a>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;
