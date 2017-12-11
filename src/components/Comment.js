import React from 'react';

const Comment = (props) => {
    let { clock, description, home_score, visitor_score, period } = props.comment;
    let { visitor, home } = props
    return (
        <div className="card" style={{ marginTop: "1rem" }}>
            <div className="card-header">
                <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i> {clock}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{description}</li>
                <li className="list-group-item">{visitor}: {visitor_score}</li>
                <li className="list-group-item">{home}: {home_score}</li>
                <li className="list-group-item"><b>Qt</b>: {period}</li>
            </ul>
        </div>
    )

}
export default Comment;