import React from 'react';
import $ from 'jquery';

class Performance extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon" >Saison</span>
                        <input type="text" className="form-control pimpmy_input" value="2017-18" placeholder="2017-18" />
                    </div>
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon">Type Saison</span>
                        <select className="pimpmy_select" id="select">
                            <option value="valeur1" defaultValue>Réguliére</option>
                            <option value="valeur2" >Playoffs</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon">Catégorie Stat</span>
                        <select className="pimpmy_select" id="select">
                            <option value="valeur1" defaultValue>Pts</option>
                            <option value="valeur2" >Pss</option>
                            <option value="valeur2" >Rbs</option>
                            <option value="valeur2" >Blk</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon">Joueur ou Equipe</span>
                        <select className="pimpmy_select" id="select">
                            <option value="valeur1" defaultValue>Joueur</option>
                            <option value="valeur2" >Equipe</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon">Portée</span>
                        <select className="pimpmy_select" id="select">
                            <option value="valeur1" defaultValue>Saison</option>
                            <option value="valeur2" >Finales</option>
                        </select>
                    </div>
                    <div className="input-group input-group-sm">
                        <span className="input-group-addon">Joueurs</span>
                        <select className="pimpmy_select" id="select">
                            <option value="valeur1" defaultValue>Tous</option>
                            <option value="valeur2" >Rookies</option>
                        </select>
                    </div>
                </div>
            </div>
        )


    }
}

export default Performance;