import React from 'react';

const LeadersInAssists =(props)=>{
    let { playerOrTeam } = props;
    let renderLeaders = () => {
        return props.data.map((lead) => {
            if (playerOrTeam === "Player") {
                return (
                    <tr key={lead.rank}>
                        <td>{lead.player}</td>
                        <td>{lead.teamAbrev}</td>
                        <td>{lead.ast}</td>
                    </tr>
                );
            } else {
                return (
                    <tr key={lead.rank}>
                        <td>{lead.teamName}</td>
                        <td>{lead.ast}</td>
                    </tr>
                );
            }
        });

    };
    let renderTableHeader = () => {
        if (playerOrTeam === "Player") {
            return (
                <tr className="tp">
                    <td><b>Joueur</b></td>
                    <td><b>Equipe</b></td>
                    <td><b>Assists</b></td>
                </tr>
            )
        } else if (playerOrTeam === "Team") {
            return (
                <tr className="tp">
                    <td><b>Equipe</b></td>
                    <td><b>Assists</b></td>
                </tr>

            )
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_card_header">
                <p>Assists</p>
            </div>
            <div className="card-body">
                <table>
                    <tbody>
                        {renderTableHeader()}
                        {renderLeaders()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LeadersInAssists;