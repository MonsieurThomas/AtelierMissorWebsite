import React, { useContext } from 'react'
import "./Articles.css"
import imageJeanne from "../../assets/photo_jeanne_darc_en_situation_928x407.webp"
import { ShopContext } from '../../context/shop-context'
import { ProductDetailsProps } from '../Product/ProductDetailsProps'
import { DATA } from '../../data'


export const Jeanne = () => {

  const {setShowNavbar} = useContext(ShopContext)
  setShowNavbar(false);

  return (
    <div className='articleCompContainer jeanne'>
      <h1 className='articleCompTitle jeanne'>Jeanne d’Arc, la statue qui sauva l’atelier</h1>
      <img className='articleCompContainerImgJeanne' src={imageJeanne} alt="no file " />
      <div className='articleCompDateContainer jeanne'>
          <p className='articleCompDate'>mai. 05, 2022</p>
          <p>Publié par: Atelier</p>
          <p>Missor</p>
      </div>
      <div className='articleCompTextPadded jeanne'>
        <p>Plus d’une fois, j’avais vu mon père dans sa colère lacérer ses tableaux au couteau.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Ma mère semblait aussi triste que si elle avait assisté à un meurtre.</p>       
        <div className='articleCompTextPaddedP'/>
        <p>Il y a de cela huit mois, alors que j’étais enfermé dans mon atelier de Nice, je commençais la sculpture de Jeanne d’Arc. Je la commençais joyeux, car je le suis toujours quand je commence une nouvelle œuvre. Je suis toujours curieux de voir comment ces statues me transformeront, car elles me transforment. Parfois je leur pose des questions, et parfois elles me répondent.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Je ne suis pas un très bon sculpteur, il y a encore trop de naïveté dans mes gestes, mais je prends les statues au sérieux. Pour moi, ce n’est pas un jeu.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Je commençais la statue de Jeanne d’Arc et à mesure qu’un visage apparaissait, ma détestation de moi-même grandissait. Je prenais le couteau que j’utilisais pour la sculpture, et je lacérais son visage, jusqu’à ce que l’argile en face de moi n’ait plus rien d’un visage.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Des mois durant, mon équipe m’encourageait à faire cette statue de Jeanne d’Arc, sachant que notre atelier avait besoin de cela pour survivre.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Plusieurs fois, je l’ai recommencé, plusieurs fois je l’ai détruite. Mais à chaque fois, c’était le même visage qui apparaissait. Les mêmes traits, le même regard. Il me semblait que mon esprit savait à quoi elle devait ressembler.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Pour la quatrième fois, je la détruisis. Il y avait cette histoire sur Jeanne d’Arc, qui me touchait particulièrement.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Sur elle, il existait mille légendes, toutes plus fantastiques les unes que les autres.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Une petite fille de rien du tout, quitte son petit village pour se présenter devant le Roi, finit par guider une armée vers la victoire et libère la France.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Aucun pays n’a dans son histoire une telle héroïne. Mais de ces légendes incroyables, celle qui me touchait le plus était plus modeste.</p>
        <div className='articleCompTextPaddedP'/>
        <p>C’était à sa toute fin. Un tribunal menace de la brûler vive pour sorcellerie si elle n’avoue pas avoir menti sur ces « voix » qu’elle prétend avoir entendu. Elle avoue alors avoir menti. Le soir, de retour dans sa cellule, torturée par ses voix, et sa conscience, elle prend la ferme décision de rester loyale envers elles. Le lendemain, elle se rétracte et en paie le prix. Elle meurt brûlée vive.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Il n’y a pas beaucoup d’histoires qui m’emplissent autant de tristesse.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Je vivais cette situation étrange dans mon atelier, où j’avais jour et nuit tous ces visages qui me regardaient, toutes ces sculptures que j’avais faites, et qui autour de moi, épiaient mes faits et gestes. La situation économique de l’atelier était tragique, à cause de mauvaises décisions que j’avais prises et qui nous avaient conduits à nous endetter. Le prix des statues était trop bas et nous vendions à perte, tout en creusant une dette.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Je savais que notre seul espoir était de finir enfin cette statue de Jeanne d’Arc.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Pour la cinquième fois, je prenais l’argile et je me mettais au travail.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Plusieurs fois je touchais du doigt ce moment où la force de la destruction remontait à la surface. Plusieurs fois je me répétais à moi-même: « tiens bon ». Je ne comprends pas pourquoi les gens ne se racontent plus l’histoire de Jeanne d’Arc.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Elle disait: « dans mon pays, on m’appelait Jeannette ». Quand elle disait « pays », elle voulait dire « village ». Les gens qui partaient de leurs villages, prenaient encore à cœur de raconter à la ville comme ceux de leurs villages étaient des gens dignes.</p>
        <div className='articleCompTextPaddedP'/>
        <p>C’était un autre temps, où la valeur suprême était celle de l’honneur. Pendant cinq siècles, les gens se racontaient cette histoire de Jeanne d’Arc, pour se donner du courage dans les moments de détresse, et plus d’une fois cette histoire à redonné espoir. Cette histoire a bâti nos murs et nos toits. Pourquoi aujourd’hui, les gens ne se la racontent-ils plus?</p>
        <p>Sont-ils devenus meilleurs que Jeanne ? Cette histoire est-elle devenue indigne d’eux?</p>
        <p>Jeanne est notre héroïne de l’espoir, et il est certain que sans ses murmures je n’aurais pas réussi à finir cette statue.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Quant à notre atelier de sculpture, qui n’était qu’à quelques jours de la faillite, son heure n’est pas encore arrivée. Il est assez étrange de se dire que c’est Jeanne d’Arc… qui l’a sauvée.</p>
        <div className='articleCompTextPaddedP'/>
        <div className='articleCompTextPaddedP'/>
        <p>Missor</p>
        <button>Suivant</button>
        </div>
        <h5>Retrouvez notre buste</h5>
        <ProductDetailsProps data={DATA[12]} />
    </div>
  )
}
