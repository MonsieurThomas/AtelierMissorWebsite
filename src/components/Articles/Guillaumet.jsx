import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import imageGuillaumet from "../../assets/Guillaumet.jpeg"
import "./Articles.css"
import { ProductDetailsProps } from '../Product/ProductDetailsProps';
import { DATA } from '../../data';

export const Guillaumet = () => {

  const {setShowNavbar} = useContext(ShopContext)
  setShowNavbar(false);

  return (
    <div className='articleCompContainer'>
      <h1 className='articleCompTitle'>Ce que j’ai fait, je te le jure, aucune bête ne l’aurait fait.</h1>
      <img className='ArticleCompGuillaumetImg' src={imageGuillaumet} alt="no file" />
      <div className='articleCompDateContainer guillaumet '>
          <p className='articleCompDate'>avr. 23, 2022</p>
          <p>Publié par: Atelier</p>
          <p>Missor</p>
      </div>
      <div className='articleCompTextPadded jeanne'>
        <p>«Ce que j’ai fait, je te le jure, aucune bête ne l’aurait fait. »</p>
        <div className='articleCompTextPaddedP'/>
        <p>Ce sont les premiers mots qui sont sortis de la bouche de Guillaumet, quand il a été retrouvé par son ami Antoine de Saint Exupéry, après avoir survécu pendant six jours dans les montagnes suite au crash de son avion. Six jours avec sa veste en tweed, une photo de sa femme dans son portefeuille et une bouteille de rhum dans une valise.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Il y a trois ans, comme beaucoup de jeunes de ma génération, je sortais d’une adolescence très tardive. Je n’avais pas suivi les enseignements de ma culture, mais plutôt ceux de mon temps. Aussi, je ne savais pas comment vivre ma vie. Je me disais: « je ne sais rien, je ne comprends rien. Je sais seulement une chose, je dois devenir un homme. Mais je ne sais même pas ce qu’est un homme ». Mon questionnement était sincère.</p>
        <div className='articleCompTextPaddedP'/>
        <p>J’avais déjà décidé que ce ne serait pas la logique qui répondrait à mes questions, mais les choix de mon cœur. J’entendais mille histoires qui me touchaient et je voyais petit à petit une idée s’élever au-dessus du chaos. C’était l’idée de la promesse. Elle me touchait particulièrement, je pensais qu’il y avait là une magie. Un homme, serait celui qui tiendrait une promesse.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Récemment, l’histoire de Guillaumet m’a été contée. Elle m’a particulièrement touché et m’a rappelé cela… la promesse.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Il s’était écrasé au milieu des montagnes, était resté deux jours à côté de son avion et avait décidé de marcher les soixante kilomètres qui le séparaient du premier village. Il croyait peu à ses chances de s’en sortir. Il ramassa un caillou, et raya la coque de son avion avec cette écriture: « Une dernière pensée pour ma femme, je marche vers l’Est. Adieu.»</p>
        <div className='articleCompTextPaddedP'/>
        <p>Avec un pareil froid, quand on s’endort, on ne se réveille plus. Guillaumet le savait et pour cela il ne dormait plus. Dans tant de neige, tout dans son corps lui disait de dormir. Une bête aurait dormi. Lui marcha.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Qu’est-ce qui fait que l’homme marche quand la bête tombe? Est-ce les muscles? Est-ce la volonté?</p>
        <div className='articleCompTextPaddedP'/>
        <p>Guillaumet avait foi en l’homme, et savait que le destin de l’homme était de faire le travail pour lequel il avait été appelé sur cette Terre. Son existence n’était pas de son fait, aussi il ne s’appartenait pas. Son existence était une promesse, et son devoir, c’était de la tenir.</p>
        <div className='articleCompTextPaddedP'/>
        <p>« Après deux, trois, quatre jours de marche, on ne souhaite plus que le sommeil. Je le souhaitais. Mais je me disais: Ma femme, si elle croit que je vis, croit que je marche. Les camarades croient que je marche. Ils ont tous confiance en moi. Et je suis un salaud si je ne marche pas. »</p>
        <div className='articleCompTextPaddedP'/>
        <p>À travers lui, sa survie n’était pas en jeu mais l’honneur de l’homme. Et ce jour-là, Guillaumet définissait encore une fois ce qu’était l’homme. Il est celui qui tient une promesse.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Quand la vie devient dure, je reviens toujours à me dire la même chose: « La promesse est faite, elle est celle-ci: Vis. Pour les tiens, pour ta famille, pour tes amis. Pour tes maîtres qui t’ont appris ce qu’était un homme. Tiens ta promesse. »</p>
        <div className='articleCompTextPaddedP'/>
        <p>Missor</p>
        <button>Suivant</button>
        </div>
        <h5>Retrouvez notre buste</h5>
        <ProductDetailsProps data={DATA[12]} />
    </div>
  )
}
