
const axios= require('axios');
const stripJsonComments= require('strip-json-comments');

let games = [];
let getTodayGames = () => {
    axios.get('http://data.nba.net/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json')
        .then(function (response) {
            let result = response.data;
            console.log(result);
            games = result.gs.g;
            console.log(games[0].v.tn);
        })
        .catch(function (error) {
            console.log(error);
        });
};

getTodayGames();
