import React from 'react';

class Accueil extends React.Component {
    render() {
        return (
            <h1>DAILY NBA APP</h1>
        )
    }
}

export default Accueil;
/*
const axios = require('axios');
console.log('Test');

var f = () => {
    axios.get('http://data.nba.net/json/cms/2017/league/nba_games.json')
        .then(function (response) {
            console.log(response.data.sports_content.schedule.game[0]);
        })
        .catch(function (error) {
            console.log(error);
        });
}

f();*/

/* fetch*/
/*var self = this;
fetch('https://cors-anywhere.herokuapp.com/data.nba.net/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json')
    .then(function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
        }
    })
    .then(function(body) {
    self.setState({ games :body.gs.g});
    self.setState({ isLoading: false });
    });*/

/*
let {gameid}= this.props.match.params;
        let d = new Date();
        let year = d.getFullYear();
        let url = `https://cors-anywhere.herokuapp.com/data.nba.net/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameid}_gamedetail.json`;
        console.log(url);
        axios.get(url)
            .then(res => {
                const game = res.data.g;
                const vPlayers = game.vls.pstsg;
                const hPlayers = game.hls.pstsg;
                this.setState({ homePlayers: hPlayers });
                this.setState({ visitorPlayers: vPlayers });
            });

*/

// les résultats du jour (00 est le code pour la nba)
//http://data.nba.net/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json

// détail de chaque match. Il va nous permettre de mettre les joueurs avec le plus de points. On peut recupérer le id du match dans la 1ere requete ci-dessus.
//http://data.nba.net/v2015/json/mobile_teams/nba/2016/scores/gamedetail/0021600732_gamedetail.json

// pour le planning
//http://data.nba.net/json/cms/2017/league/nba_games.json