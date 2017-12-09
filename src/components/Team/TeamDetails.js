import React from 'react';

const TeamDetails = (props) => {
    let { yearFounded, city, owner, generalManager ,headCoach, dLeagueAffiliation } = props.details;
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header">
            
            <i className="fa fa-info-circle fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i>Détails
        </div>
            <div className="card-body">
                <table className="scoreTable">
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
            </div>
        </div>
    )
}

export default TeamDetails;