import React from 'react';
import MySpinner from '../Utils/MySpinner';
import {getTextLanguage} from '../Utils/Language';

const TeamAwardsChampionship = (props) => {
    let { championships } = props;
    let getChampionships = () => {
        if(!championships){
            return (
                <MySpinner name="three-bounce" color="#17a2b8" />
            )
        }
        if (championships.length > 0) {
            return championships.map((championship) => {
                return (
                    <div key={championship.YearAwarded} className="card  pimpmy_championship_card">
                        <div className="card-header text-center">
                            <b>{championship.YearAwarded}</b>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span><b>{getTextLanguage().oppositeTeam}</b></span>: {championship.OppositeTeam}</p>
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
                <i className="fa fa-trophy fa-2x pimpmy_fa" aria-hidden="true"></i>{getTextLanguage().championships}
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