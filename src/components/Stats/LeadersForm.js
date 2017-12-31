import React from 'react';

class LeadersForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            saison:"2017-18",
            typeSaison:"Regular Season",
            categorieStat:"Points",
            joueurOuEquipe:"Player",
            joueurs:"All Players"
        };
        this.handleSaisonChange= this.handleSaisonChange.bind(this);
        this.handleTypeSaisonChange= this.handleTypeSaisonChange.bind(this);
        this.handleCategorieStatChange=this.handleCategorieStatChange.bind(this);
        this.handleJoueurOuEquipeChange=this.handleJoueurOuEquipeChange.bind(this);
        this.handleJoueursChange=this.handleJoueursChange.bind(this);
        this.modifier=this.modifier.bind(this);
    }
    handleSaisonChange(e){
        let saison = this.refs.saison.value;
        this.setState({saison});
        console.log(saison);
    }
    handleTypeSaisonChange(e){
        let typeSaison = this.refs.typeSaison.value;
        this.setState({typeSaison});
        console.log(typeSaison);
        //this.props.onChange(this.state);
    }
    handleCategorieStatChange(e){
        let categorieStat = this.refs.categorieStat.value;
        this.setState({categorieStat});
        console.log(categorieStat);
    }
    handleJoueurOuEquipeChange(e){
        let joueurOuEquipe = this.refs.joueurOuEquipe.value;
        this.setState({joueurOuEquipe});
        console.log(joueurOuEquipe);
    }
    handleJoueursChange(e){
        let joueurs = this.refs.joueurs.value;
        this.setState({joueurs});
        console.log(joueurs);
    }
    modifier(){
        this.props.onChange(this.state);
    }
    render() {
        return (
            <div className="container leadersForm">
                <div className="pimpmy_leaderform_div row">
                    <label className="col-sm-4">Saison</label>
                    <input type="text" value={this.state.saison} className="pimpmy_select_input col-sm-8" ref="saison" onChange={this.handleSaisonChange}/>
                </div>
                <div className="pimpmy_leaderform_div row">
                    <label className="col-sm-4">Type Saison</label>
                    <select className="pimpmy_select_input col-sm-8" value={this.state.typeSaison} ref="typeSaison" onChange={this.handleTypeSaisonChange}>
                        <option value="Regular Season">Réguliére</option>
                        <option value="Playoffs">Playoffs</option>
                    </select>

                </div>
                <div className="pimpmy_leaderform_div row">
                    <label className="col-sm-4">Catégorie Stat</label>
                    <select className="pimpmy_select_input col-sm-8" ref="categorieStat" onChange={this.handleCategorieStatChange}>
                        <option value="Points">Point</option>
                        <option value="Assists">Passe</option>
                        <option value="Rebounds">Rebond</option>
                        <option value="Defense">Défense</option>
                    </select>

                </div>
                <div className="pimpmy_leaderform_div row">
                    <label className="col-sm-4">Joueur ou Equipe</label>
                    <select className="pimpmy_select_input col-sm-8" ref="joueurOuEquipe" onChange={this.handleJoueurOuEquipeChange}>
                        <option value="Player">Joueur</option>
                        <option value="Team">Equipe</option>
                    </select>

                </div>
                <div className="pimpmy_leaderform_div row">
                    <label className="col-sm-4">Joueurs</label>
                    <select className="pimpmy_select_input col-sm-8" ref="joueurs" onChange={this.handleJoueursChange}>
                        <option value="All Players" >Tous</option>
                        <option value="Rookies" >Rookies</option>
                    </select>

                </div>
                <div className="modifier_btn">
                    <button className="btn btn-info" onClick={this.modifier}>Modifier</button>
                </div>
            </div>
        )
    }
}

export default LeadersForm;