/*import axios from 'axios';

module.exports={
    getTodayGames : () => {
        axios.get('http://data.nba.net/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json')
            .then(function (response) {
                let result = response.data;
                console.log('yes');
                return result.gs.g;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
}*/