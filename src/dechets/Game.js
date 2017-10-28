import React from 'react';

class Game extends React.Component {
    render() {
        return (
            <div>
                <h1>Game</h1>
                <div className="card border-info">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Score</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stats</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Video</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <p className="card-text col-4">Cavaliers</p>
                            <p className="card-text col-2">20</p>
                            <p className="card-text col-2">18</p>
                            <p className="card-text col-2">15</p>
                            <p className="card-text col-2">35</p>
                        </div>
                        <div className="row">
                            <p className="card-text col-4">Bucks</p>
                            <p className="card-text col-2">20</p>
                            <p className="card-text col-2">18</p>
                            <p className="card-text col-2">15</p>
                            <p className="card-text col-2">35</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Game;