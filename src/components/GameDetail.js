import React from 'react';
import $ from 'jquery';
import Spinner from 'react-spinkit';

import RetourBtn from './RetourBtn';

class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            homeTeam: {
                teamName: '',
                teamCity: '',
                teamAbrev:'',
                homePlayers: [],
            },
            visitorTeam: {
                teamName: '',
                teamCity: '',
                teamAbrev:'',
                visitorPlayers: []
            }
        };
    }

    componentDidMount() {
        let { gameid } = this.props.match.params;
        let d = new Date();
        let year = d.getFullYear();
        let url = `https://cors-anywhere.herokuapp.com/data.nba.net/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameid}_gamedetail.json`;
        let self = this;
        $.ajax({
            url: url,
        })
            .done(function (data) {
                const game = data.g;

                const vName = game.vls.tn;
                const vCity = game.vls.tc;
                const vAbreviation= game.vls.ta;
                const vPlayers = game.vls.pstsg;

                const hName = game.hls.tn;
                const hCity = game.hls.tc;
                const hAbreviation= game.hls.ta;
                const hPlayers = game.hls.pstsg;

                let vTeam = {};
                vTeam.teamName = vName;
                vTeam.teamCity = vCity;
                vTeam.teamAbrev=vAbreviation;
                vTeam.visitorPlayers = vPlayers;

                let hTeam = {};
                hTeam.teamName = hName;
                hTeam.teamCity = hCity;
                hTeam.teamAbrev=hAbreviation;
                hTeam.homePlayers = hPlayers;

                self.setState({ homeTeam: hTeam });
                self.setState({ visitorTeam: vTeam });
                self.setState({ isLoading: false });
            });
    }

    render() {

        let sortPlayersByPoints = (team) => {
            switch (team) {
                case 'V':
                    this.state.visitorTeam.visitorPlayers.sort(function (player1, player2) {
                        return parseInt(player2.pts) - parseInt(player1.pts);
                    });
                    break;
                case 'H':
                    this.state.homeTeam.homePlayers.sort(function (player1, player2) {
                        return parseInt(player2.pts) - parseInt(player1.pts);
                    });
                    break;
                default:
                    break;

            }

        }

        let renderVPlayers = () => {
            sortPlayersByPoints('V');
            return (this.state.visitorTeam.visitorPlayers.map((player) => {
                return (
                    <tr key={player.pid}>
                        <td><b>{player.fn} {player.ln}</b></td>
                        <td>{player.pts}</td>
                        <td>{player.ast}</td>
                        <td>{player.reb}</td>
                        <td>{player.status === "I" ? "DNP" : ""}</td>
                    </tr>
                )
            }))
        };

        let renderHPlayers = () => {
            sortPlayersByPoints('H');
            return (this.state.homeTeam.homePlayers.map((player) => {
                return (
                    <tr key={player.pid}>
                        <td><b>{player.fn} {player.ln}</b></td>
                        <td>{player.pts}</td>
                        <td>{player.ast}</td>
                        <td>{player.reb}</td>
                        <td>{player.status === "I" ? "DNP" : ""}</td>
                    </tr>
                )
            }))
        }

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
                                    <p>Equipe Visiteur: <img type="image/svg+xml" src={`/img/${this.state.visitorTeam.teamAbrev}_logo.svg`}  width="50" heigth="50" />{this.state.visitorTeam.teamCity} {this.state.visitorTeam.teamName}</p>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <thead>
                                            <tr className="tp">
                                                <td></td>
                                                <td>Pts</td>
                                                <td>Pss</td>
                                                <td>Rbs</td>
                                                <td>Memo</td>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {renderVPlayers()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card border-info pimpmy_card">
                                <div className="card-header pimpmy_card_header">
                                    <p>Equipe Domicile: <img type="image/svg+xml" src={`/img/${this.state.homeTeam.teamAbrev}_logo.svg`}  width="50" heigth="50" /> {this.state.homeTeam.teamCity} {this.state.homeTeam.teamName}</p>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tbody>
                                            <tr className="tp">
                                                <td></td>
                                                <td>Pts</td>
                                                <td>Pss</td>
                                                <td>Rbs</td>
                                                <td>Memo</td>
                                            </tr>
                                            {renderHPlayers()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    )}
                <RetourBtn />
            </div>
        )
    }
}

export default GameDetail;
