import React from 'react';
import $ from 'jquery';
import Spinner from 'react-spinkit';

import LeadersForm from './LeadersForm';
import LeadersInPoints from './LeadersInPoints';
import LeadersInAssists from './LeadersInAssists';
import { getTextLanguage } from '../Utils/Language';

class Leaders extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            categorieStat: "Points",
            leadPointsData: [],
            leadAssistsData: [],
            playerOrTeam: "Player",
            isLoading: true
        }
    }

    componentDidMount() {
        let saison = "2017-18";
        let typeSaison = "Regular Season";
        let categorieStat = "Points";
        let joueurOuEquipe = "Player";
        let joueurs = "All Players";
        let url = `http://stats.nba.com/stats/homepageleaders/?leagueId=00&season=${saison}&seasonType=${typeSaison}&statCategory=${categorieStat}&playerOrTeam=${joueurOuEquipe}&gameScope=Season&playerScope=${joueurs}`;
        let self = this;

        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            success: function (response) {
                self.setState({ isLoading: false });
                let headers = (response.resultSets[0].headers);
                let { rowSet } = response.resultSets[0];
                let indexRank, indexPlayerId, indexPlayer, indexTeamAbrev, points, fg_pct, fg3_pct, ft_pct;
                indexRank = indexPlayerId = indexPlayer = -1;
                for (var i = 0; i < headers.length; i++) {
                    if (headers[i] === "RANK") {
                        indexRank = i;
                    }
                    if (headers[i] === "PLAYERID") {
                        indexPlayerId = i;
                    }
                    if (headers[i] === "PLAYER") {
                        indexPlayer = i;
                    }
                    if (headers[i] === "TEAM_ABBREVIATION") {
                        indexTeamAbrev = i;
                    }
                    if (headers[i] === "PTS") {
                        points = i;
                    }
                    if (headers[i] === "FG_PCT") {
                        fg_pct = i;
                    }
                    if (headers[i] === "FG3_PCT") {
                        fg3_pct = i;
                    }
                    if (headers[i] === "FT_PCT") {
                        ft_pct = i;
                    }
                }
                let data = [];
                for (let i = 0; i < rowSet.length; i++) {
                    let currentLeader = rowSet[i];
                    data.push(
                        {
                            "rank": currentLeader[indexRank],
                            "playerId": currentLeader[indexPlayerId],
                            "player": currentLeader[indexPlayer],
                            "teamAbrev": currentLeader[indexTeamAbrev],
                            "points": currentLeader[points],
                            "fieldGoal_pct": currentLeader[fg_pct],
                            "fieldGoal_3_pct": currentLeader[fg3_pct],
                            "freeThrow": currentLeader[ft_pct]
                        }
                    );
                }
                self.setState({ leadPointsData: data });
            },
            error: function () {

            }
        });

    }

    handleChange(changes) {
        let { saison, typeSaison, categorieStat, joueurOuEquipe, joueurs } = changes;
        this.setState({ categorieStat });
        this.setState({ playerOrTeam: joueurOuEquipe });
        let url = `http://stats.nba.com/stats/homepageleaders/?leagueId=00&season=${saison}&seasonType=${typeSaison}&statCategory=${categorieStat}&playerOrTeam=${joueurOuEquipe}&gameScope=Season&playerScope=${joueurs}`;
        let self = this;

        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            success: function (response) {
                let headers = (response.resultSets[0].headers);
                let { rowSet } = response.resultSets[0];
                let indexRank, indexPlayerId, indexPlayer, indexTeamId, indexTeamName, indexTeamAbrev, points, fg_pct, fg3_pct, ft_pct, ast;
                indexRank = indexPlayerId = indexPlayer = -1;
                for (var i = 0; i < headers.length; i++) {
                    if (headers[i] === "RANK") {
                        indexRank = i;
                    }
                    if (headers[i] === "PLAYERID") {
                        indexPlayerId = i;
                    }
                    if (headers[i] === "PLAYER") {
                        indexPlayer = i;
                    }
                    if (headers[i] === "TEAM_ID") {
                        indexTeamId = i;
                    }
                    if (headers[i] === "TEAM_NAME") {
                        indexTeamName = i;
                    }
                    if (headers[i] === "TEAM_ABBREVIATION") {
                        indexTeamAbrev = i;
                    }
                    if (headers[i] === "PTS") {
                        points = i;
                    }
                    if (headers[i] === "FG_PCT") {
                        fg_pct = i;
                    }
                    if (headers[i] === "FG3_PCT") {
                        fg3_pct = i;
                    }
                    if (headers[i] === "FT_PCT") {
                        ft_pct = i;
                    }
                    if (headers[i] === "AST") {
                        ast = i;
                    }
                }
                let data = [];
                switch (categorieStat) {
                    case "Points":
                        for (let i = 0; i < rowSet.length; i++) {
                            let currentLeader = rowSet[i];
                            if (currentLeader) {
                                data.push(
                                    {
                                        "rank": currentLeader[indexRank],
                                        "playerId": currentLeader[indexPlayerId],
                                        "player": currentLeader[indexPlayer],
                                        "teamId": currentLeader[indexTeamId],
                                        "teamName": currentLeader[indexTeamName],
                                        "teamAbrev": currentLeader[indexTeamAbrev],
                                        "points": currentLeader[points],
                                        "fieldGoal_pct": currentLeader[fg_pct],
                                        "fieldGoal_3_pct": currentLeader[fg3_pct],
                                        "freeThrow": currentLeader[ft_pct]
                                    }
                                );
                            }
                        }
                        self.setState({ leadPointsData: data });
                        break;
                    case "Assists":
                        for (let i = 0; i < rowSet.length; i++) {
                            let currentLeader = rowSet[i];
                            if (currentLeader) {
                                data.push(
                                    {
                                        "rank": currentLeader[indexRank],
                                        "playerId": currentLeader[indexPlayerId],
                                        "player": currentLeader[indexPlayer],
                                        "teamId": currentLeader[indexTeamId],
                                        "teamName": currentLeader[indexTeamName],
                                        "teamAbrev": currentLeader[indexTeamAbrev],
                                        "ast": currentLeader[ast]
                                    }
                                );
                            }
                        }
                        self.setState({ leadAssistsData: data });
                        break;
                    default:
                        break;

                }
            },
            error: function () {

            }
        });
    }

    render() {
        let renderLeaders = () => {
            let { isLoading, categorieStat, leadAssistsData, leadPointsData } = this.state;
            if (isLoading) {
                return (
                    <div>
                        <span>{getTextLanguage().loading}</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                )
            } else if (categorieStat === "Points" && leadPointsData.length > 0) {
                return (
                    <div className="container">
                        <LeadersForm onChange={this.handleChange} />
                        <LeadersInPoints data={this.state.leadPointsData} playerOrTeam={this.state.playerOrTeam} />
                    </div>
                )
            } else if (categorieStat === "Assists" && leadAssistsData.length > 0) {
                return (
                    <div className="container">
                        <LeadersForm onChange={this.handleChange} />
                        <LeadersInAssists data={this.state.leadAssistsData} playerOrTeam={this.state.playerOrTeam} />
                    </div>
                )
            }
        }

        return (
            <div>
                {renderLeaders()}
            </div>
        )
    }
}

export default Leaders;