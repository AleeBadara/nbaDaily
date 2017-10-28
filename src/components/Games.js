import React from 'react';
var $ = require("jquery");

import Api from '../api/TodayGames';
import Game from './Game';


class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            games: [],
            isLoading: true
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }
    handleDateChange() {
        let date = this.refs.date.value;
        this.setState({ date });
    }

    componentWillMount() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let dateValue = year + '-' + month + '-' + day;
        this.setState({ date: dateValue });
        let self = this;
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/data.nba.net/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json",
        })
            .done(function (data) {
                self.setState({ games: data.gs.g });
                self.setState({ isLoading: false });
            });
    }

    render() {
        let { games, isLoading } = this.state;
        let renderGames = () => {
            if (games.length > 0) {
                return games.map((game) => {
                    return (
                        <Game key={game.gid} {...game} />
                    );
                });
            } else if (isLoading) {
                return (
                    <div className="container">
                        <p>Chargement...</p>
                    </div>
                )
            } else {
                return (
                    <div className="container">
                        <p>Aucun résultat trouvé pour aujourd'hui.</p>
                    </div>
                )
            }
        };
        return (
            <div>
                {renderGames()}
            </div>
        );
    }
}

export default Games;