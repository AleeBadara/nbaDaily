import React from 'react';

const LeadersInPoints = (props) => {
    let { playerOrTeam } = props;
    let renderLeaders = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((lead) => {
                if (playerOrTeam === "Player") {
                    return (
                        <tr key={lead.rank}>
                            <td>{lead.player}</td>
                            <td>{lead.teamAbrev}</td>
                            <td>{lead.points}</td>
                            <td className="td_hide">{lead.fieldGoal_pct}</td>
                            <td className="td_hide">{lead.fieldGoal_3_pct}</td>
                            <td className="td_hide">{lead.freeThrow}</td>
                        </tr>
                    );
                } else {
                    return (
                        <tr key={lead.rank}>
                            <td>{lead.teamName}</td>
                            <td>{lead.points}</td>
                            <td className="td_hide">{lead.fieldGoal_pct}</td>
                            <td className="td_hide">{lead.fieldGoal_3_pct}</td>
                            <td className="td_hide">{lead.freeThrow}</td>
                        </tr>
                    );
                }
            });

        } else {
            return
        }


    };
    let renderTableHeader = () => {
        if (playerOrTeam === "Player") {
            return (
                <tr className="tp">
                    <td><b>Joueur</b></td>
                    <td><b>Equipe</b></td>
                    <td><b>Points</b></td>
                    <td className="td_hide"><b>FG %</b></td>
                    <td className="td_hide"><b>3 Points %</b></td>
                    <td className="td_hide"><b>FT %</b></td>
                </tr>
            )
        } else if (playerOrTeam === "Team") {
            return (
                <tr className="tp">
                    <td><b>Equipe</b></td>
                    <td><b>Points</b></td>
                    <td className="td_hide"><b>FG %</b></td>
                    <td className="td_hide"><b>3 Points %</b></td>
                    <td className="td_hide"><b>FT %</b></td>
                </tr>

            )
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_card_header">
                <p>Points</p>
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

export default LeadersInPoints;