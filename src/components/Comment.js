import React from 'react';

const Comment = (props) => {
    let { clock, description, home_score, visitor_score, period } = props;
    return (
        <div className="card" style={{ marginTop: "1rem" }}>
            <div className="card-header">
                <b>Minute</b>: {clock}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{description}</li>
                <li className="list-group-item">Score Equipe Visiteur: {visitor_score}</li>
                <li className="list-group-item">Score Equipe Receveur: {home_score}</li>
                <li className="list-group-item"><b>Quart temps</b>: {period}</li>
            </ul>
        </div>
    )

}
export default Comment;