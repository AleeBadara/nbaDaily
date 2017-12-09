import React from 'react';

import TeamDetails from './TeamDetails';
import TeamSocialSites from './TeamSocialSites';

class TeamProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            socialSites: [],
            awards: [],
            hallOfFameInductees: [],
            retiredMembers: []
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
                        //console.log(self.state.details)
                    }

                    if (index.hasOwnProperty("SocialSites")) {
                        self.setState({ socialSites: index['SocialSites'] });
                        //console.log(self.state.socialSites)
                    }
                    if (index.hasOwnProperty("Awards")) {
                        self.setState({ awards: index['Awards'] });
                        //console.log(self.state.awards)
                    }
                    if (index.hasOwnProperty("HallOfFameInductees")) {
                        self.setState({ hallOfFameInductees: index['HallOfFameInductees'] });
                        //console.log(self.state.hallOfFameInductees)
                    }
                    if (index.hasOwnProperty("RetiredMembers")) {
                        self.setState({ retiredMembers: index['RetiredMembers'] });
                        //console.log(self.state.retiredMembers)
                    }
                }
            });
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
        
        console.log(this.state.details[0])
        
        return (
            <div className="container">
                <TeamDetails details={getDetails()}/>
                <TeamSocialSites socialSites={getSocialSites()}/>
            </div>
        )
    }
}

export default TeamProfile;