import React from 'react';
var $ = require("jquery");

import Archive from './Archive';
import RetourBtn from './RetourBtn';
import Spinner from 'react-spinkit';
import {getTextLanguage} from './Utils/Language';


class Archives extends React.Component {
    constructor(props) {
        super(props);
        let d = new Date();
        d.setDate(d.getDate() - 2); // les archives commencent à jour j-2.
        let year = d.getFullYear();
        let month = (d.getMonth() + 1).toString();
        let montWithTwoCharacter = month.length === 2 ? month : '0' + month;
        let day = (d.getDate()).toString();
        let dayWithTwoCharacter = day.length === 2 ? day : '0' + day;

        let dateForInput = year + '-' + montWithTwoCharacter + '-' + dayWithTwoCharacter;
        let dateForApi = `${year}${month}${dayWithTwoCharacter}`;

        this.state = {
            dateForApi: dateForApi,
            dateForInput: dateForInput,
            games: [],
            isLoading: true
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }
    handleDateChange() {
        let date = this.refs.date.value;
        this.setState({ dateForInput: date });
        let dateForApi = date.replace(/-/g, '');
        this.setState({ dateForApi: dateForApi });
        let url = `https://cors-anywhere.herokuapp.com/data.nba.net/json/cms/noseason/scoreboard/${dateForApi}/games.json`;
        let self = this;
        $.ajax({
            url: url,
        })
            .done(function (data) {
                let leagueId = data.sports_content.sports_meta.season_meta.league_id;
                let games = data.sports_content.games.game;
                self.setState({ games });
                self.setState({ isLoading: false });
            })
            .fail(function (xhr, status, errorThrown) {
                self.setState({ games: [] });
                self.setState({ isLoading: false });
            });
    }


    /**
     * This method will be executed when the component “mounts” (is added to the DOM) for the first time. 
     * This method is only executed once during the component’s life
     */
    componentDidMount() {
        let url = `https://cors-anywhere.herokuapp.com/data.nba.net/json/cms/noseason/scoreboard/${this.state.dateForApi}/games.json`;
        let self = this;
        $.ajax({
            url: url,
        })
            .done(function (data) {
                let leagueId = data.sports_content.sports_meta.season_meta.league_id;
                let games = data.sports_content.games.game;
                self.setState({ games });
                self.setState({ isLoading: false });
            });
    }

    render() {
        let { games, isLoading } = this.state;
        let renderGames = () => {
            if (games.length > 0) {
                return games.map((game) => {
                    return (
                        <Archive key={game.id} {...game} />
                    );
                });
            } else if (isLoading) {
                return (
                    <div className="container">
                        <span>{getTextLanguage().loading}</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                )
            } else {
                return <p>{getTextLanguage().noResultToday}</p>
            }
        };
        return (
            <div>
                <div className="pimpmy_datePicker">
                    <label className="dateLabel">Date</label>
                    <input type="date" className="dateInput" ref="date" max={this.state.dateForInput} value={this.state.dateForInput} onChange={this.handleDateChange} />
                </div>
                {renderGames()}
                <RetourBtn  chemin="/"/>
            </div>
        );
    }
}

export default Archives;