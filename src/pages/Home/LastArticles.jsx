import React from 'react'
import { Link } from 'react-router-dom'
import Jeanne from '../../assets/photo_jeanne_darc_en_situation_928x407.webp';
import Guillaumet from '../../assets/Guillaumet.jpeg';
import MarcAurele from '../../assets/statue_marc_aurele.webp';
import "./Home.css";

export const LastArticles = () => {
  return (
    <div className='lastArticleContainer'>
        <h1 className='LastArticleTitle'>NOS ARTICLES</h1>
        <div>
            <Link to='/jeanne' className="LastArticleFlex">
                <img className="LastArticleImgJeanne" src={Jeanne} alt="no file" />
                <div className="LastArticleText">
                    <h1>Jeanne d’Arc, la statue qui sauva l’atelier</h1>
                    <p>Plus d’une fois, j’avais vu mon père dans sa colère lacérer 
                        ses tableaux au couteau. Ma mère semblait aussi triste que 
                        si elle avait assisté à un meurtre.Il y a de cela huit mois, 
                        alors que j’étais enfermé dans mon atelier...</p>
                    <p id="LastArticleEnd">Lire l'article</p>
                </div>
            </Link>
        </div>
        <div>
            <Link to='/guillaumet' className="LastArticleFlex">
                <img className="LastArticleImg guillaumet" src={Guillaumet} alt="no file" />
                <div className="LastArticleText">
                    <h1>Ce que j’ai fait, je te le jure, aucune bête ne l’aurait fait.</h1>
                    <p>Ce sont les premiers mots qui sont sortis de la bouche de Guillaumet, 
                        quand il a été retrouvé par son ami Antoine de Saint Exupéry, après avoir survécu 
                        pendant six jours dans les montagnes suite au crash de son avion...</p>
                    <p id="LastArticleEnd">Lire l'article</p>
                </div>
            </Link>
        </div>
        <div>
            <Link to='/marcAurele' className="LastArticleFlex">
                <img className="LastArticleImg" src={MarcAurele} alt="no file" />
                <div className="LastArticleText">
                    <h1>Marc Aurèle : Aux Hommes nobles le fardeau.</h1>
                    <p>Un jour, on se regarde dans la glace et il y a une fissure.</p>
                    <p id="LastArticleEnd">Lire l'article</p>
                </div>
            </Link>
        </div>
    </div>
  )
}
