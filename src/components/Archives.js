import React from 'react';
var $ = require("jquery");

import Api from '../api/TodayGames';
import Game from './Game';


class Archives extends React.Component {
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
        this.setState({date});
    }

    componentWillMount() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let dateValue=year+'-'+month+'-'+day;
        this.setState({date:dateValue});
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
                return <p>Chargement...</p>
            } else {
                return <p>Aucun résultat trouvé pour aujourd'hui.</p>
            }
        };
        return (
            <div>
                <div className="pimpmy_datePicker">
                 <label className="dateLabel">Date</label>   
                <input type="date" className="dateInput" ref="date" value={this.state.date} onChange={this.handleDateChange}/>
                </div>
                {renderGames()}
            </div>
        );
    }
}

export default Archives;