import React from 'react';
import { NavLink } from 'react-router-dom';

class Archive extends React.Component {
    render() {
        let { id, period_time, visitor, home, st } = this.props;
        let getStatusGame = () => {
            switch (period_time.game_status.toString()) {
                case "1":
                    return "Non débuté";
                case "2":
                    return "En cours";
                case "3":
                    return "Score Final";
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
                                <td>{visitor.nickname}</td>
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
                                <td>{home.nickname}</td>
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
                        if (period_time.period_value.toString()==="1") {
                            return (
                                <tr>
                                    <td>{visitor.nickname}</td>
                                    <td className="qt-points">{visitor.linescores.period.score}</td>
                                    <td className="qt-points"></td>
                                    <td className="qt-points"></td>
                                    <td className="qt-points"></td>
                                    <td>{getVisitorFinalScore()}</td>
                                </tr>
                            );
                        }else if(period_time.period_value.toString()==="2"){
                            return (
                                <tr>
                                    <td>{visitor.nickname}</td>
                                    <td className="qt-points">{visitor.linescores.period[0].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[1].score}</td>
                                    <td className="qt-points"></td>
                                    <td className="qt-points"></td>
                                    <td>{getVisitorFinalScore()}</td>
                                </tr>
                            );
                        }else if(period_time.period_value.toString()==="2"){
                            return (
                                <tr>
                                    <td>{visitor.nickname}</td>
                                    <td className="qt-points">{visitor.linescores.period[0].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[1].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[1].score}</td>
                                    <td className="qt-points"></td>
                                    <td>{getVisitorFinalScore()}</td>
                                </tr>
                            );
                        } else{
                            return (
                                <tr>
                                    <td>{visitor.nickname}</td>
                                    <td className="qt-points">{visitor.linescores.period[0].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[1].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[2].score}</td>
                                    <td className="qt-points">{visitor.linescores.period[3].score}</td>
                                    <td>{getVisitorFinalScore()}</td>
                                </tr>
                            );
                        }

                    case "H":
                    if (period_time.period_value.toString()==="1") {
                        return (
                            <tr>
                                <td>{home.nickname}</td>
                                <td className="qt-points">{home.linescores.period.score}</td>
                                <td className="qt-points"></td>
                                <td className="qt-points"></td>
                                <td className="qt-points"></td>
                                <td>{getHomeFinalScore()}</td>
                            </tr>
                        );
                    }else if(period_time.period_value.toString()==="2"){
                        return (
                            <tr>
                                <td>{home.nickname}</td>
                                <td className="qt-points">{home.linescores.period[0].score}</td>
                                <td className="qt-points">{home.linescores.period[1].score}</td>
                                <td className="qt-points"></td>
                                <td className="qt-points"></td>
                                <td>{getHomeFinalScore()}</td>
                            </tr>
                        );
                    }else if(period_time.period_value.toString()==="2"){
                        return (
                            <tr>
                                <td>{home.nickname}</td>
                                <td className="qt-points">{home.linescores.period[0].score}</td>
                                <td className="qt-points">{home.linescores.period[1].score}</td>
                                <td className="qt-points">{home.linescores.period[1].score}</td>
                                <td className="qt-points"></td>
                                <td>{getHomeFinalScore()}</td>
                            </tr>
                        );
                    } else{
                        return (
                            <tr>
                                <td>{home.nickname}</td>
                                <td className="qt-points">{home.linescores.period[0].score}</td>
                                <td className="qt-points">{home.linescores.period[1].score}</td>
                                <td className="qt-points">{home.linescores.period[2].score}</td>
                                <td className="qt-points">{home.linescores.period[3].score}</td>
                                <td>{getHomeFinalScore()}</td>
                            </tr>
                        );
                    }

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
                                    <button className="btn btn-sm btn-outline-info disabled">Stats</button>
                                    <button className="btn btn-sm btn-outline-info disabled">Video</button>
                                </div>
                            ) : (
                                <div>
                                    <NavLink to={`stats/${this.props.id}`}><button className="btn btn-sm btn-outline-info">Stats</button></NavLink>
                                    <button className="btn btn-sm btn-outline-info disabled ">Video</button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Archive;