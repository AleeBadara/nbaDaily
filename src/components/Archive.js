import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "./Logo";
import {getTextLanguage} from './Utils/Language';

const Archive = (props) => {
    let { id, period_time, visitor, home, st, date } = props;
    let q = `${visitor.city} ${visitor.nickname} vs ${home.city} ${home.nickname} Full Game Highlights`;
    let getStatusGame = () => {
        switch (period_time.game_status.toString()) {
            case "1":
                return getTextLanguage().notStarted;
            case "2":
                return getTextLanguage().enCours;
            case "3":
                return getTextLanguage().finalScore;
            default:
                return "";
        }
    }
    let getVisitorFinalScore = () => {
        let visitorFinalScore = parseInt(visitor.score);
        let homeFinalScore = parseInt(home.score);
        if (visitorFinalScore > homeFinalScore) {
            return <b>{visitor.score}</b>;
        } else {
            return visitor.score;
        }
    }
    let getHomeFinalScore = () => {
        let visitorFinalScore = parseInt(visitor.score);
        let homeFinalScore = parseInt(home.score);
        if (homeFinalScore > visitorFinalScore) {
            return <b>{home.score}</b>;
        } else {
            return home.score;
        }
    }

    let renderScores = (team) => {
        if (period_time.game_status.toString() === "1") {
            switch (team) {
                case "V":
                    return (
                        <tr>
                            <Logo teamName={visitor.nickname} teamAbrev={visitor.abbreviation} />
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td>{getVisitorFinalScore()}</td>
                        </tr>
                    );
                case "H":
                    return (
                        <tr>
                            <Logo teamName={home.nickname} teamAbrev={home.abbreviation} />
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td className="qt-points"></td>
                            <td>{getVisitorFinalScore()}</td>
                        </tr>
                    );
                default:
                    break;
            }

        } else {
            switch (team) {
                case "V":
                    return (
                        <tr>
                            <Logo teamName={visitor.nickname} teamAbrev={visitor.abbreviation} />
                            <td className="qt-points">{visitor.linescores.period[0].score}</td>
                            <td className="qt-points">{visitor.linescores.period[1].score}</td>
                            <td className="qt-points">{visitor.linescores.period[2].score}</td>
                            <td className="qt-points">{visitor.linescores.period[3].score}</td>
                            <td>{getVisitorFinalScore()}</td>
                        </tr>
                    );

                case "H":
                    return (
                        <tr>
                            <Logo teamName={home.nickname} teamAbrev={home.abbreviation} />
                            <td className="qt-points">{home.linescores.period[0].score}</td>
                            <td className="qt-points">{home.linescores.period[1].score}</td>
                            <td className="qt-points">{home.linescores.period[2].score}</td>
                            <td className="qt-points">{home.linescores.period[3].score}</td>
                            <td>{getHomeFinalScore()}</td>
                        </tr>
                    );
                default:
                    break;
            }
        }

    }

    return (
        <div className="container">
            <div className="card border-info pimpmy_card">
                <div className="card-body">
                    <table className="scoreTable">
                        <tbody>
                            <tr className="qt">
                                <td><b>{getStatusGame()}</b></td>
                                <td className="qt-name">1<sup>Qt</sup></td>
                                <td className="qt-name">2<sup>Qt</sup></td>
                                <td className="qt-name">3<sup>Qt</sup></td>
                                <td className="qt-name">4<sup>Qt</sup></td>
                                <td><b>T</b></td>
                            </tr>
                            {renderScores("V")}
                            {renderScores("H")}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    {period_time.game_status.toString() === "1" ?
                        (
                            <div >
                                <button className="btn btn-sm btn-outline-info disabled pimpmy_gamebtn"><i className="fa fa-line-chart" aria-hidden="true"></i></button>
                            </div>
                        ) : (
                            <div>
                                <NavLink to={`stats/${props.id}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-line-chart" aria-hidden="true"></i></button></NavLink>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )

}

export default Archive;