import React from 'react';

import TeamAwardsChampionship from './TeamAwardsChampionship';
import TeamAwardsConferenceTitle from './TeamAwardsConferenceTitle';

const TeamAwards = (props) => {
    let championships = [];
    let conferenceTitles = [];
    let hallOfFameInductees = [];
    let setChampionships = () => {
        for (let i = 0; i < props.awards.length; i++) {
            let index = props.awards[i];
            if (index.hasOwnProperty("Championships")) {
                championships = index["Championships"];
            }
        }
    };
    setChampionships();

    let setConferenceTitles = () => {
        for (let i = 0; i < props.awards.length; i++) {
            let index = props.awards[i];
            if (index.hasOwnProperty("ConferenceTitles")) {
                conferenceTitles = index["ConferenceTitles"];
            }
        }
    }
    setConferenceTitles();

    return (
        <div>
            <TeamAwardsChampionship  championships={championships} />
            <TeamAwardsConferenceTitle  conferenceTitles={conferenceTitles} />
        </div>
    )
}

export default TeamAwards;