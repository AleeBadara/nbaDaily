import React from 'react';
import $ from 'jquery';
import Spinner from 'react-spinkit';

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

    /**
     * This method will be executed when the component “mounts” (is added to the DOM) for the first time. 
     * This method is only executed once during the component’s life
     */
    componentDidMount() {
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
        })
        .fail(function( xhr, status, errorThrown ) {
            self.setState({ games:[] });
            self.setState({ isLoading: false });
        });;
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
                        <span>Chargement...</span>
                        <Spinner name="rotating-plane" color="#17a2b8"/>
                    </div>
                )
            } else {
                return (
                    <div className="container">
                        <p>Aucun résultat trouvé pour aujourd'hui.</p>
                        <div className="container retour">
                            <NavLink exact to="/archives"><button type="button" className="btn btn-info">Voir Archives</button></NavLink>
                        </div>
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