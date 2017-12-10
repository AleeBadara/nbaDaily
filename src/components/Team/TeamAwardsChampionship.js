import React from 'react';

const TeamAwardsChampionship = (props) => {
    let { championships } = props;
    let getChampionships = () => {
        if (championships.length > 0) {
            return championships.map((championship) => {
                return (
                    <div key={championship.YearAwarded} className="card  pimpmy_championship_card">
                        <div className="card-header text-center">
                            <b>{championship.YearAwarded}</b>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span><b>Equipe adverse</b></span>: {championship.OppositeTeam}</p>
                        </div>
                    </div>
                );
            });
        } else {
            return (
                <p>Aucun titre</p>
            )
        }
    };
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_cardHeader">
                <i className="fa fa-trophy fa-2x pimpmy_fa" aria-hidden="true"></i>Champion NBA *
                </div>
            <div className="card-body">
                <div className="container">
                    {getChampionships()}
                </div>
            </div>
        </div>
    )
}

export default TeamAwardsChampionship;