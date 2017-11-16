import React from 'react';

let Logo = (props) => {
    let teamName=props.teamName;
    let teamAbreviation=props.teamAbrev;
    return (
        <td><img type="image/svg+xml" src={`/img/${teamAbreviation}_logo.svg`} alt={`${teamName} logo`} title={`${teamName} logo`} className="logo"/><span className="teamName"> {teamName}</span></td>
    )
}

export default Logo;