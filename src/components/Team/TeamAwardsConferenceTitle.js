import React from 'react';
import MySpinner from '../Utils/MySpinner';

const TeamAwardsConferenceTitle = (props) => {
    let { conferenceTitles } = props;
    let getConferenceTitles = () => {
        if(!conferenceTitles){
            return (
                <MySpinner name="three-bounce" color="#17a2b8" />
            )
        }
        if (conferenceTitles.length > 0) {
            return conferenceTitles.map((conferenceTitle) => {
                return (
                    <p key={conferenceTitle.YearAwarded}>
                        <b>{conferenceTitle.YearAwarded}</b>
                    </p>
                );
            });
        } else {
            return (
                <p>Aucun titre</p>
            )
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_cardHeader">
                <i className="fa fa-trophy fa-2x pimpmy_fa" aria-hidden="true"></i>Champion Conférence *
            </div>
            <div className="card-body">
                <div className="container">
                    {getConferenceTitles()}
                </div>
            </div>
        </div>
    )
}

export default TeamAwardsConferenceTitle;