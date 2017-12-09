import React from 'react';
import { NavLink } from 'react-router-dom';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                { id: "1610612737", abrev: "ATL" },
                { id: "1610612751", abrev: "BKN" },
                { id: "1610612738", abrev: "BOS" },
                { id: "1610612766", abrev: "CHA" },
                { id: "1610612741", abrev: "CHI" },
                { id: "1610612739", abrev: "CLE" },
                { id: "1610612742", abrev: "DAL" },
                { id: "1610612743", abrev: "DEN" },
                { id: "1610612765", abrev: "DET" },
                { id: "1610612744", abrev: "GSW" },
                { id: "1610612745", abrev: "HOU" },
                { id: "1610612754", abrev: "IND" },
                { id: "1610612746", abrev: "LAC" },
                { id: "1610612747", abrev: "LAL" },
                { id: "1610612763", abrev: "MEM" },
                { id: "1610612748", abrev: "MIA" },
                { id: "1610612749", abrev: "MIL" },
                { id: "1610612750", abrev: "MIN" },
                { id: "1610612740", abrev: "NOP" },
                { id: "1610612752", abrev: "NYK" },
                { id: "1610612760", abrev: "OKC" },
                { id: "1610612753", abrev: "ORL" },
                { id: "1610612755", abrev: "PHI" },
                { id: "1610612756", abrev: "PHX" },
                { id: "1610612757", abrev: "POR" },
                { id: "1610612758", abrev: "SAC" },
                { id: "1610612759", abrev: "SAS" },
                { id: "1610612761", abrev: "TOR" },
                { id: "1610612762", abrev: "UTA" },
                { id: "1610612764", abrev: "WAS" }

            ]

        }
    }
    render() {
        let renderTeam = () => {
            return this.state.teams.map((team) => {
                let { id, abrev } = team;
                return (
                    <li key={id} className="list-group-item"><img type="image/svg+xml" src={`/img/${abrev}_logo.svg`} className="logo" /><NavLink to={`teamprofile/${id}/${abrev}`}><button className="btn btn-sm btn-outline-info ">Voir</button></NavLink></li>
                );
            });
        }
        return (
            <div className="container">
                <ul className="list-group">
                    {renderTeam()}
                </ul>


            </div>
        )
    }
}

export default Teams;