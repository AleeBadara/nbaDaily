import React from 'react';

const TeamHallOfFame = (props) => {
    let { hallOfFameInductees } = props;
    let getHallOfFameInductees = () => {
        if (hallOfFameInductees.length > 0) {
            return hallOfFameInductees.map((hallOfFameInductee) => {
                return (
                    <div key={hallOfFameInductee.PlayerID} className="card pimpmy_championship_card">
                        <div className="card-header text-center">
                            <b>{hallOfFameInductee.Player}</b>
                        </div>

                        <div className="card-body">
                            <div className="container">
                                <p className="card-text"><span><b>Année</b></span>: {hallOfFameInductee.Year}</p>
                                <p className="card-text"><span><b>Saison avec l'équipe</b></span>: {hallOfFameInductee.SeasonsWithTeam}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            return (
                <p>Aucun Hall Of Fame</p>
            )
        }
    };
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_cardHeader">
                <i className="fa fa-users fa-2x pimpmy_fa" aria-hidden="true"></i>Hall Of Fame
                </div>
            <div className="card-body">
                <div className="container">
                    {getHallOfFameInductees()}
                </div>
            </div>
        </div>
    )
}

export default TeamHallOfFame;