import detectBrowserLanguage from 'detect-browser-language';

export function getTextLanguage() {
    let lang = detectBrowserLanguage() ? detectBrowserLanguage().toUpperCase() : "";
    lang = "us"
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
        "teamProfileNote": "*:data from the previous 2 years may be missing. This is due to the periodicity of data updates from the NBA."
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
        texts.teamProfileNote = "*: des données sur les 2 années précédentes peuvent être manquantes. Ceci est dû à la périodicité de mise à jour des données de la part de la NBA."
    }
    return texts;
}