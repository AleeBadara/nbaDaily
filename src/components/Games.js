import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import Spinner from 'react-spinkit';

import Api from '../api/TodayGames';
import Game from './Game';
import { getTextLanguage } from './Utils/Language';


class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            games: [],
            isLoading: true,
            error: false
        };
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
                console.log("ok");
                self.setState({ games: data.gs.g });
                self.setState({ isLoading: false });
                self.setState({ error: false });
            })
            .fail(function (xhr, status, errorThrown) {
                console.log((xhr.status).toString())
                let code = (xhr.status);
                if (code === 0) {
                    self.setState({ error: true });
                }
                self.setState({ games: [] });
                self.setState({ isLoading: false });
            });;
    }

    render() {
        let { games, isLoading, error } = this.state;
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
                        <span>{getTextLanguage().loading}</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                )
            } else if (error) {
                return (
                    <div className="container">
                        <p>{getTextLanguage().errorTechnique}</p>
                    </div>
                )
            }
            else {
                return (
                    <div className="container">
                        <p>{getTextLanguage().noResultToday}</p>
                        <div className="container retour">
                            <NavLink exact to="/archives"><button type="button" className="btn btn-info">Archives</button></NavLink>
                        </div>
                    </div>
                )
            }
        };
        let renderNBAXmas = () => {
            return (
                <div className="container">
                    <i className="fa fa-snowflake-o" aria-hidden="true" style={{padding:"0.5rem",color:"#0091EA"}}></i>
                    <i className="fa fa-gift" aria-hidden="true" style={{padding:"0.5rem",color:"#009688"}}><span style={{paddingLeft:"1rem",color:"#E91E63",fontSize:"1.5rem"}}>#NBAXmas Day</span></i>
                    <i className="fa fa-snowflake-o" aria-hidden="true" style={{padding:"0.5rem",color:"#0091EA"}}></i>
                    <i className="fa fa-gift" aria-hidden="true" style={{padding:"0.5rem",color:"#009688"}}></i>
                </div>
            )

        }
        return (
            <div>
                {renderNBAXmas()}
                {renderGames()}
            </div>
        );
    }
}

export default Games;