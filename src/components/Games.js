import React from 'react';
import $ from 'jquery';
import Spinner from 'react-spinkit';
import detectBrowserLanguage from 'detect-browser-language'

import Api from '../api/TodayGames';
import Game from './Game';


class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            games: [],
            isLoading: true,
            language:detectBrowserLanguage()
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
        let getTextLanguage= ()=> {
            let lang= detectBrowserLanguage()? detectBrowserLanguage().toUpperCase():"";
            console.log(lang);
            let texts={
                "load":"Loading...",
                "noResult":"No result found for today",
                archiveTextBtn:"See Archives"
            }
            if(lang.indexOf("FR")!== -1){
                texts.load="Chargement...";
                texts.noResult="Aucun résultat trouvé pour aujourd'hui.",
                texts.archiveTextBtn="Voir Archives"
            }
            return texts;
        }
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
                        <span>{getTextLanguage().load}</span>
                        <Spinner name="rotating-plane" color="#17a2b8"/>
                    </div>
                )
            } else {
                return (
                    <div className="container">
                        <p>{getTextLanguage().noResult}</p>
                        <div className="container retour">
                            <NavLink exact to="/archives"><button type="button" className="btn btn-info">{getTextLanguage().archiveTextBtn}</button></NavLink>
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