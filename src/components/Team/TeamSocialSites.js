import React from 'react';

const TeamSocialSites = (props) => {
    let facebook, instagram, twitter;
    if (props.socialSites && props.socialSites.length > 0) {
        for (var i = 0; i < props.socialSites.length; i++) {
            if (props.socialSites[i].AccountType === 'Facebook') {
                facebook = props.socialSites[i].WebSite_Link;
            }
            if (props.socialSites[i].AccountType === 'Instagram') {
                instagram = props.socialSites[i].WebSite_Link;
            }
            if (props.socialSites[i].AccountType === 'Twitter') {
                twitter = props.socialSites[i].WebSite_Link;
            }
        }
    }
    return (
        <div className="card border-info pimpmy_card">
            <div className="card-header pimpmy_cardHeader">
                <i className="fa fa-globe fa-2x pimpmy_fa" aria-hidden="true"></i>Réseau Social
            </div>
            <div className="card-body">
            <div className="container">
                    <p><i className="fa fa-facebook-official fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i>
                    <a href={`${facebook}`} target="_blank">{facebook}</a>
                    </p>
                    <p>
                        <i className="fa fa-twitter-square fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i>
                        <a href={`${twitter}`} target="_blank">{twitter}</a>
                    </p>
                    <p><i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.5rem' }}></i>
                    <a href={`${instagram}`} target="_blank">{instagram}</a></p>
                    </div>
            </div>
        </div>
    )
}

export default TeamSocialSites;