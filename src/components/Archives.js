import React from 'react';
var $ = require("jquery");

import Archive from './Archive';


class Archives extends React.Component {
    constructor(props) {
        super(props);
        let d = new Date();
        d.setDate(d.getDate() - 1); // les archives commencent à jour j-1.
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        let dateForInput = year + '-' + month + '-' + day;
        let dateForApi = `${year}${month}${day}`;

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
                return <p>Chargement...</p>
            } else {
                return <p>Aucun résultat trouvé pour aujourd'hui.</p>
            }
        };
        return (
            <div>
                <div className="pimpmy_datePicker">
                    <label className="dateLabel">Date</label>
                    <input type="date" className="dateInput" ref="date" max ={this.state.dateForInput} value={this.state.dateForInput} onChange={this.handleDateChange} />
                </div>
                {renderGames()}
            </div>
        );
    }
}

export default Archives;