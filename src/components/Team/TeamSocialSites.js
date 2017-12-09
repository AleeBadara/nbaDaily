import React from 'react';

const TeamSocialSites = (props) => {
    let facebook, instagram, twitter;
    console.log(props.socialSites)
    if(props.socialSites && props.socialSites.length>0){
        for(var i=0; i<props.socialSites.length;i++){
            console.log("Yes")
            if(props.socialSites[i].AccountType === 'Facebook'){
                facebook= props.socialSites[i].WebSite_Link;
            }
            if(props.socialSites[i].AccountType === 'Instagram'){
                instagram= props.socialSites[i].WebSite_Link;
            }
            if(props.socialSites[i].AccountType === 'Twitter'){
                twitter= props.socialSites[i].WebSite_Link;
            }
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header">
                <i className="fa fa-globe fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i>Réseau Social
            </div>
            <div className="card-body">
                <table className="scoreTable">
                    <tbody>
                        <tr >
                            <td><i className="fa fa-facebook-official fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i></td>
                            <td><a href={`${facebook}`} target="_blank">{facebook}</a></td>
                        </tr>
                        <tr >
                            <td><i className="fa fa-twitter-square fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i></td>
                            <td><a href={`${twitter}`} target="_blank">{twitter}</a></td>
                        </tr>
                        <tr >
                            <td><i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i></td>
                            <td><a href={`${instagram}`} target="_blank">{instagram}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeamSocialSites;