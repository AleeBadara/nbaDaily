import React from 'react';

import RetourBtn from '../RetourBtn';
import TeamAwards from './TeamAwards';
import TeamDetails from './TeamDetails';
import TeamSocialSites from './TeamSocialSites';
import TeamHallOfFame from './TeamHallOfFame';

class TeamProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            socialSites: [],
            awards: [],
            hallOfFameInductees: [],
            retiredMembers: [],
            isLoading:true
        }
    }
    componentDidMount() {
        let { id, abrev } = this.props.match.params;
        let url = `https://cors-anywhere.herokuapp.com/http://stats.nba.com/feeds/teams/profile/${id}_TeamProfile.js`;
        let self = this;
        $.ajax({
            url: url,
        })
            .done(function (data) {
                let result = JSON.parse(data);
                for (let i = 0; i < result.TeamDetails.length; i++) {
                    let index = result.TeamDetails[i];
                    if (index.hasOwnProperty("Details")) {
                        self.setState({ details: index['Details'] });
                    }

                    if (index.hasOwnProperty("SocialSites")) {
                        self.setState({ socialSites: index['SocialSites'] });
                    }
                    if (index.hasOwnProperty("Awards")) {
                        self.setState({ awards: index['Awards'] });
                    }
                    if (index.hasOwnProperty("HallOfFameInductees")) {
                        self.setState({ hallOfFameInductees: index['HallOfFameInductees'] });
                    }
                    if (index.hasOwnProperty("RetiredMembers")) {
                        self.setState({ retiredMembers: index['RetiredMembers'] });
                    }
                }
                self.setState({ isLoading: false });
            })
            .fail(function (xhr, status, errorThrown) {
                self.setState({ details: [] });
                self.setState({ socialSites: [] });
                self.setState({ awards: [] });
                self.setState({ hallOfFameInductees: [] });
                self.setState({ isLoading: false });
            });;
    }
    render() {
        let getDetails=()=>{
            let details={}; 
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('YearFounded')){
                details.yearFounded= this.state.details[0].YearFounded;
            }
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('City')){
                details.city= this.state.details[0].City;
            }
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('Owner')){
                details.owner= this.state.details[0].Owner;
            }
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('GeneralManager')){
                details.generalManager= this.state.details[0].GeneralManager;
            }
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('HeadCoach')){
                details.headCoach= this.state.details[0].HeadCoach;
            }
            if(this.state.details && this.state.details[0] && this.state.details[0].hasOwnProperty('DLeagueAffiliation')){
                details.dLeagueAffiliation= this.state.details[0].DLeagueAffiliation;
            }
            return details;

        }

        let getSocialSites=()=>{
            let socialSites={}; 
            if(this.state.socialSites && this.state.socialSites.length>0){
                socialSites= this.state.socialSites;
            }
            return socialSites;

        }

        let getAwards=()=>{
            let awards={};
            if(this.state.awards && this.state.awards.length>0){
                awards= this.state.awards;
            }
            return awards;
        }

        let getHallOfFameInductees=()=>{
            let hallOfFameInductees={};
            if(this.state.hallOfFameInductees && this.state.hallOfFameInductees.length>0){
                hallOfFameInductees= this.state.hallOfFameInductees;
            }
            return hallOfFameInductees;
        }
        
        return (
            <div className="container">
                <TeamDetails details={getDetails()}/>
                <TeamAwards awards={getAwards()}/>
                <TeamHallOfFame hallOfFameInductees={getHallOfFameInductees()}/>
                <TeamSocialSites socialSites={getSocialSites()}/>
                <p><small>*: des données sur les 2 années précédentes peuvent être manquantes. Ceci est dû à la périodicité de mise à jour des données de la part de la NBA.</small></p>
                <RetourBtn chemin="/teams"/>
            </div>
        )
    }
}

export default TeamProfile;