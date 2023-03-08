import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Ecrits.css'
import imageJeanne from "../../assets/photo_jeanne_darc_en_situation_928x407.webp"
import imageGuillaumet from "../../assets/Guillaumet.jpeg"
import imageMarcAurele from "../../assets/statue_marc_aurele.webp"
import imageSaintExupery from "../../assets/Gbr14-index_1170x696.jpeg"
import { ShopContext } from '../../context/shop-context'

export const Ecrits = () => {

    const { setShowNavbar } = useContext(ShopContext)
    setShowNavbar(false)
  return (
    <div className='ecritContainer'>
        <h1>Ecrits</h1>
        <div className='articleContainer'>
            <h2>Jeanne d’Arc, la statue qui sauva l’atelier</h2>
            <div className='articleTextandImageContainer'>
                <div className='articleSmallText'>
                    <p className='articlePDate'>mai 05, 2022</p>
                    <p>Publié par: Atelier</p>
                    <p>Missor</p>
                </div>
                <div className='articleImageAndText'>
                    <img src={imageJeanne} alt="no file" />
                    <h6>Plus d’une fois, j’avais vu mon père dans sa colère lacérer ses tableaux au couteau. Ma mère semblait aussi triste que si elle avait assisté à un meurtre.Il y a de cela huit mois, alors que j’étais enfermé dans mon atelier...</h6>
                    <Link to="/jeanne" className='articleLinkToFullArticle'>Lire la suite...</Link>
                </div>
            </div>
        </div>

        <div className='articleContainer'>
            <h2>Ce que j’ai fait, je te le jure, aucune bête ne l’aurait fait.</h2>
            <div className='articleTextandImageContainer'>
                <div className='articleSmallText'>
                    <p className='articlePDate'>avr. 23, 2022</p>
                    <p>Publié par: Atelier</p>
                    <p>Missor</p>
                </div>
                <div className='articleImageAndText'>
                    <img src={imageGuillaumet} alt="no file" />
                    <h6>«Ce que j’ai fait, je te le jure, aucune bête ne l’aurait fait. », ce sont les premiers mots qui sont sortis de la bouche de Guillaumet, quand il a été retrouvé par son ami Antoine de Saint Exupéry, après...</h6>
                    <Link to="/guillaumet" className='articleLinkToFullArticle'>Lire la suite...</Link>
                </div>
            </div>
        </div>

        <div className='articleContainer'>
            <h2>Marc Aurèle : Aux Hommes nobles le fardeau.</h2>
            <div className='articleTextandImageContainer'>
                <div className='articleSmallText'>
                    <p className='articlePDate'>oct. 31, 2021</p>
                    <p>Publié par: Atelier</p>
                    <p>Missor</p>
                </div>
                <div className='articleImageAndText'>
                    <img src={imageMarcAurele} alt="no file" />
                    <h6>Un jour, on se regarde dans la glace et il y a une fissure.</h6>
                    <Link to='/marcAurele' className='articleLinkToFullArticle'>Lire la suite...</Link>
                </div>
            </div>
        </div>

        <div className='articleContainer'>
            <h2>Saint-Exupéry : Mener ses hommes à la mort</h2>
            <div className='articleTextandImageContainer'>
                <div className='articleSmallText'>
                    <p className='articlePDate'>oct. 15, 2021</p>
                    <p>Publié par:</p>
                    <p>Guillaume Bonnefoy</p>
                </div>
                <div className='articleImageAndText'>
                    <img src={imageSaintExupery} alt="no file" />
                    <h6>Que vaut la vie d'un homme face à son devoir ? Peut-on (doit-on) disposer de celle des autres comme de la sienne ?</h6>
                    <Link to='/saintExupery' className='articleLinkToFullArticle'>Lire la suite...</Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}
