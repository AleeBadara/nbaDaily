import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "./Logo";

const Game = (props) => {
    let { v, h, st } = props;
    let date = props.gcode.split('/')[0];
    let q = `${v.tc} ${v.tn} vs ${h.tc} ${h.tn} Full Game Highlights`;
    let vAbreviation = v.ta;
    let hAbreviation = h.ta;
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

    let renderFooter = () => {
        if (st.toString() === "1") {
            return (
                <div >
                    <button className="btn btn-sm btn-outline-info disabled pimpmy_gamebtn"><i className="fa fa-line-chart" aria-hidden="true"></i></button>
                    <button className="btn btn-sm btn-outline-info disabled pimpmy_gamebtn"><i className="fa fa-youtube-play" aria-hidden="true"></i></button>
                    <button className="btn btn-sm btn-outline-info disabled pimpmy_gamebtn"><i className="fa fa-comment-o" aria-hidden="true"></i></button>
                </div>
            )
        } else if (st.toString() === "2") {
            return (
                <div >
                    <NavLink to={`stats/${props.gid}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-line-chart" aria-hidden="true"></i></button></NavLink>
                    <button className="btn btn-sm btn-outline-info disabled pimpmy_gamebtn"><i className="fa fa-youtube-play" aria-hidden="true"></i></button>
                    <NavLink to={`comments/${date}/${props.gid}/${st}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-commenting-o" aria-hidden="true"></i></button></NavLink>
                </div>
            )

        } else {
            return (
                <div>
                    <NavLink to={`stats/${props.gid}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-line-chart" aria-hidden="true"></i></button></NavLink>
                    <NavLink to={`videos/${date}/${q}/${vAbreviation}/${hAbreviation}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-youtube-play" aria-hidden="true"></i></button></NavLink>
                    <NavLink to={`comments/${date}/${props.gid}/${st}`}><button className="btn btn-sm btn-outline-info pimpmy_gamebtn"><i className="fa fa-comment-o" aria-hidden="true"></i></button></NavLink>
                </div>
            )

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
                                <Logo teamName={v.tn} teamAbrev={v.ta} />
                                <td className="qt-points">{v.q1}</td>
                                <td className="qt-points">{v.q2}</td>
                                <td className="qt-points">{v.q3}</td>
                                <td className="qt-points">{v.q4}</td>
                                <td>{getVisitorFinalScore()}</td>
                            </tr>
                            <tr>
                                <Logo teamName={h.tn} teamAbrev={h.ta} />
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
                    {renderFooter()}
                </div>
            </div>
        </div>
    )
}

export default Game;