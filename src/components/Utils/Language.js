import React from 'react';

let lang = navigator && navigator.language ? (navigator.language).toUpperCase() : "";
export function getTextLanguage() {
    let texts = {
        "title": "NBA Daily",
        "live": "Live",
        "classement": "Standings",
        "teams": "Teams",
        "archives": "Archives",
        "about": "About",
        "oppositeTeam": "Opposite Team",
        "championships": "Championships",
        "noTitle": "No title",
        "conferenceTitles": "Conference Titles",
        "yearFounded": "Year founded",
        "city": "City",
        "owner": "Owner",
        "generalManager": "General Manager",
        "year": "Year",
        "seasonsWithTeam": "Seasons with team",
        "noHOF": "No Hall Of Fame",
        "teamProfileNote": "*:data from the previous 2 years may be missing. This is due to the periodicity of data updates from the NBA.",
        "loading": "Loading...",
        "noResultToday": "No results found for today.",
        "notStarted": "Coming next",
        "enCours": "Live",
        "finalScore": "Final Score",
        "team":"Team",
        "east":"East",
        "west":"West",
        "noComment":"No comments found.",
        "commentRefreshMessage":"Refresh the page for the latest official commentary from the NBA.",
        "assist":"Ast",
        "goBack":"Back",
        "noResult":"No results.",
        "victoire":"W",
        "defaite":"L"
    }
    if (lang.indexOf("FR") !== -1) {
        texts.title = "NBA Quotidien";
        texts.classement = "Classement";
        texts.teams = "Equipes";
        texts.about = "A propos";
        texts.oppositeTeam = "Equipe adverse";
        texts.championships = "Champion NBA *";
        texts.noTitle = "Aucun titre";
        texts.conferenceTitles = "Champion Conférence *";
        texts.yearFounded = "Année de foundation";
        texts.city = "Ville";
        texts.owner = "Propriétaire";
        texts.generalManager = "Manager Général";
        texts.year = "Année";
        texts.seasonsWithTeam = "Saison avec l'équipe";
        texts.noHOF = "Aucun Hall Of Fame";
        texts.teamProfileNote = "*: des données sur les 2 années précédentes peuvent être manquantes. Ceci est dû à la périodicité de mise à jour des données de la part de la NBA.";
        texts.loading = "Chargement...";
        texts.noResultToday = "Aucun résultat trouvé pour aujourd'hui.";
        texts.notStarted = "Non débuté";
        texts.enCours = "En cours";
        texts.finalScore = "Score Final";
        texts.team="Equipe";
        texts.east="Est";
        texts.west="Ouest";
        texts.noComment="Aucun commentaire trouvé.";
        texts.commentRefreshMessage="Rafraichir la page de temps en temps pour avoir les derniers commentaires officiels de la NBA.";
        texts.assist="Pss";
        texts.goBack="Retour";
        texts.noResult="Acun résultat.";
        texts.victoire="V";
        texts.defaite="D"
    }
    return texts;
}

export function getAboutText() {
    if (lang.indexOf("FR") !== -1) {
        return (
            <div>
                <h5>Pas un site généraliste</h5>
                <p>Ce site est consacré aux résultats de la NBA. Son but n'est pas de couvrir toute l'actualité de la NBA (il existe déjà plusieurs sites pour cela).</p>
                <p>Son but est de vous fournir l'essentiel sur les matchs, à savoir le direct, les statistiques, les classements (est, ouest), highlights et archives.</p>
                <p>Le site se veut simpliste. Vous n'êtes pas submergé par une énorme quantité d'informations comme la plupart des autres sites.</p>
                <p>Si vous êtes à la recherche d'articles sur le meilleur joueur de tout les temps, de reportage sur tel joueur, équipe, etc., des à-côtés de la NBA, ce site n'est pas le bon endroit.</p>
                <h5>Améliorez le site</h5>
                <p>Le but de ce site est aussi d'être à l'écoute des utilisateurs. Si vous voulez voir certaines choses en plus sur ce site, n'hésitez à me faire signe.
            Tant que la proposition est pertinente et réalisable, je la mettrai en place pour le bonheur de tout le monde.</p>
                <p>Pour toute proposition, contactez moi par l'un des canaux ci-dessous (twitter ou mail).</p>
                <div>
                    <a href="https://twitter.com/Iam_Alioune" target="_blank"><i className="fa fa-twitter fa-3x pimpmy_fontawesome" aria-hidden="true"></i>@Iam_Alioune</a>
                    <p><i className="fa fa-envelope fa-3x pimpmy_fontawesome" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.2rem' }}></i>mbaye.alioune.badara@gmail.com</p>
                </div>
                <h5>Crédits</h5>
                <p>Merci à Freepik de www.flaticon.com pour le Favicon du site.</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>This site is dedicated to the results of the NBA. Its purpose is not to cover all the news of the NBA (there are already several sites for this).</p>
                <p>His goal is to provide you with the essentials on the matches (live, statistics, rankings, highlights and archives).</p>
                <p>The site is simplistic. You are not overwhelmed by a huge amount of information like most other sites.</p>
                <p>If you are looking for articles on the best player of all time, reporting on such player, team, etc., this site is not the right place.</p>
                <h5>Improve the site</h5>
                <p>The purpose of this site is also to listen to users. If you want to see some more things on this site, feel free to wave me.
         As long as the proposal is relevant and feasible, I will put it in place for the happiness of everyone.</p>
                <p>For any proposal, contact me by one of the channels below (twitter or email).</p>
                <div>
                    <a href="https://twitter.com/Iam_Alioune" target="_blank"><i className="fa fa-twitter fa-3x pimpmy_fontawesome" aria-hidden="true"></i>@Iam_Alioune</a>
                    <p><i className="fa fa-envelope fa-3x pimpmy_fontawesome" aria-hidden="true" style={{ color: '#007bff', paddingRight: '0.2rem' }}></i>mbaye.alioune.badara@gmail.com</p>
                </div>
                <h5> Credits </ h5>
                <p> Thanks to Freepik of www.flaticon.com for the Favicon of the site. </ p>
            </div>
        )
    }
}