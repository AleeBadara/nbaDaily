import React from 'react';
import { NavLink } from 'react-router-dom';

class Game extends React.Component {
    render() {
        let { v, h, st } = this.props;
        let getStatusGame = () => {
            switch (st.toString()) {
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
            let visitorFinalScore = parseInt(v.s);
            let homeFinalScore = parseInt(h.s);
            if (visitorFinalScore > homeFinalScore) {
                return <b>{v.s}</b>;
            } else {
                return v.s;
            }
        }
        let getHomeFinalScore = () => {
            let visitorFinalScore = parseInt(v.s);
            let homeFinalScore = parseInt(h.s);
            if (homeFinalScore > visitorFinalScore) {
                return <b>{h.s}</b>;
            } else {
                return h.s;
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
                                <tr>
                                    <td>{v.tn}</td>
                                    <td className="qt-points">{v.q1}</td>
                                    <td className="qt-points">{v.q2}</td>
                                    <td className="qt-points">{v.q3}</td>
                                    <td className="qt-points">{v.q4}</td>
                                    <td>{getVisitorFinalScore()}</td>
                                </tr>
                                <tr>
                                    <td>{h.tn}</td>
                                    <td className="qt-points">{h.q1}</td>
                                    <td className="qt-points">{h.q2}</td>
                                    <td className="qt-points">{h.q3}</td>
                                    <td className="qt-points">{h.q4}</td>
                                    <td>{getHomeFinalScore()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        {st.toString() === "1" ?
                            (
                                <div >
                                    <button className="btn btn-sm btn-outline-info disabled">Stats</button>
                                    <button className="btn btn-sm btn-outline-info disabled">Video</button>
                                </div>
                            ) : (
                                <div>
                                    <NavLink to={`stats/${this.props.gid}`}><button className="btn btn-sm btn-outline-info">Stats</button></NavLink>
                                    <button className="btn btn-sm btn-outline-info disabled">Video</button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;