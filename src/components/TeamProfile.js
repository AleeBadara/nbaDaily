import React from 'react';
import _ from "underscore";

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
                console.log(url);
                let result = JSON.parse(data);
                console.log(result);
                for (let i = 0; i < result.TeamDetails.length; i++) {
                    let index = result.TeamDetails[i];
                    if (_.has(index, "Details")) {
                        self.setState({details:_.propertyOf(index)('Details')});
                        console.log(self.state.details)
                    }
                    if (_.has(index, "SocialSites")) {
                        self.setState({socialSites:_.propertyOf(index)('SocialSites')});
                        console.log(self.state.socialSites)
                    }
                    if (_.has(index, "Awards")) {
                        self.setState({awards:_.propertyOf(index)('Awards')});
                        console.log(self.state.awards)
                    }
                    if (_.has(index, "HallOfFameInductees")) {
                        self.setState({hallOfFameInductees:_.propertyOf(index)('HallOfFameInductees')});
                        console.log(self.state.hallOfFameInductees)
                    }
                    if (_.has(index, "RetiredMembers")) {
                        self.setState({retiredMembers:_.propertyOf(index)('RetiredMembers')});
                        console.log(self.state.retiredMembers)
                    }
                }
            });
    }
    render() {
        return (
            <div className="container">
            </div>
        )
    }
}

export default TeamProfile;