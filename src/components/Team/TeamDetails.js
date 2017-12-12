import React from 'react';
import MySpinner from '../Utils/MySpinner';

const TeamDetails = (props) => {
    let { yearFounded, city, owner, generalManager, headCoach, dLeagueAffiliation } = props.details;
    let renderDetails = () => {
        if (props.details) {
            return (
                <table>
                    <tbody>
                        <tr >
                            <td><b>Année de foundation:</b></td>
                            <td>{yearFounded}</td>
                        </tr>
                        <tr>
                            <td><b>Ville:</b></td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td><b>Propriétaire:</b></td>
                            <td>{owner}</td>
                        </tr>
                        <tr>
                            <td><b>Manager Général:</b></td>
                            <td>{generalManager}</td>
                        </tr>
                        <tr>
                            <td><b>Coach:</b></td>
                            <td>{headCoach}</td>
                        </tr>
                        <tr>
                            <td><b>DLeague Affiliation:</b></td>
                            <td>{dLeagueAffiliation}</td>
                        </tr>

                    </tbody>
                </table>
            )
        } else {
            return (
                <MySpinner name="three-bounce" color="#17a2b8" />
            )
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_cardHeader">
                <i className="fa fa-info-circle fa-2x pimpmy_fa" aria-hidden="true"></i>Infos
        </div>
            <div className="card-body">
                {renderDetails()}
            </div>
        </div>
    )
}

export default TeamDetails;