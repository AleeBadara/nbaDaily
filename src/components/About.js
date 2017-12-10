import React from 'react';
import RetourBtn from './RetourBtn';

const About = () => {
    return (
        <div className="container about">
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
            <RetourBtn chemin="/"/>
        </div>
    )

}

export default About;