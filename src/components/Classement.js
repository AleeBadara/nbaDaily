import React from 'react';
import $ from 'jquery';
import Spinner from 'react-spinkit';

import RetourBtn from './RetourBtn';

class Classement extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            eastTeams: [],
            westTeams: []
        }
    }

    componentWillMount() {
        let d = new Date();
        let year = d.getFullYear();
        let self = this;
        $.ajax({
            url: `https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/${year}/standings/conference.json`,
        })
            .done(function (data) {
                let results = data.sports_content.standings.conferences
                self.setState({ eastTeams: results.East.team });
                self.setState({ westTeams: results.West.team });
                self.setState({ isLoading: false });
                self.setState({ isLoading: false });
            });
    }
    render() {
        let renderEastClassement = () => {
            return this.state.eastTeams.map((team) => {
                return (
                    <tr key={team.id}>
                        <td>{team.team_stats.rank}</td>
                        <td>{team.name} - {team.nickname}</td>
                        <td>{team.team_stats.wins}</td>
                        <td>{team.team_stats.losses}</td>
                    </tr>
                );
            });
        };
        let renderWestClassement = () => {
            return this.state.westTeams.map((team) => {
                return (
                    <tr key={team.id}>
                        <td>{team.team_stats.rank}</td>
                        <td>{team.name} - {team.nickname}</td>
                        <td>{team.team_stats.wins}</td>
                        <td>{team.team_stats.losses}</td>
                    </tr>
                );
            });
        };
        return (
            <div className="container">
                {this.state.isLoading ? (
                    <div className="container">
                        <span>Chargement...</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                ) : (
                        <div>
                            <div className="card border-info pimpmy_card">
                                <div className="card-header pimpmy_card_header">
                                    <p>Conférence EST</p>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tbody>
                                            <tr className="tp">
                                                <td><b>Rang</b></td>
                                                <td><b>Equipe</b></td>
                                                <td><b>V</b></td>
                                                <td><b>D</b></td>
                                            </tr>
                                            {renderEastClassement()}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card border-info pimpmy_card">
                                <div className="card-header pimpmy_card_header">
                                    <p>Conférence OUEST</p>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tbody>
                                            <tr className="tp">
                                                <td><b>Rang</b></td>
                                                <td><b>Equipe</b></td>
                                                <td><b>V</b></td>
                                                <td><b>D</b></td>
                                            </tr>
                                            {renderWestClassement()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    )}
                <RetourBtn  chemin="/"/>
            </div>
        )
    }
}

export default Classement;