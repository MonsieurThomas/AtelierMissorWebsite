import React, { useContext } from 'react'
import "./Articles.css"
import imageAvionRangé from "../../assets/SaintExupery/daurat2_480x480.jpeg"
import imageDidierDaurat from "../../assets/SaintExupery/Didier_Daurat_00347_240x240.webp"
import imageAvion from "../../assets/SaintExupery/Gbr14-index_1170x696.jpeg"
import { DATA } from '../../data'
import { ProductDetailsProps } from '../Product/ProductDetailsProps'
import { ShopContext } from '../../context/shop-context'

export const SaintExupery = () => {

    const {setShowNavbar} = useContext(ShopContext)
    setShowNavbar(false);
    
  return (
    <div className='articleCompContainer'>
        <h1 className='articleCompTitle saintExupery'>Saint-Exupéry : Mener ses hommes à la mort</h1>
        <img className='articleCompAvionImg' src={imageAvion} alt="no file" />
        <div className='articleCompFlex saintExupery'>
            <div className='articleCompDateContainer'>
                <p className='articleCompDate'>oct. 15, 2021</p>
                <p>Publié par:</p>
                <p>Guillaume Bonnefoy</p>
            </div>
            <img src={imageDidierDaurat} alt="no file" />
        </div>
        <p className='ArticleLegendeSaintExupery'>Rivière est le personnage principal de Vol de Nuit. Il est largement inspiré de Didier Daurat, pionnier et figure marquante de l'aéropostale, sous les ordres duquel Saint-Exupéry a volé.</p>
        <div className='articleCompTextPadded saintExupery'>
            <p>Que vaut la vie d'un homme face à son devoir ? Peut-on (doit-on) disposer de celle des autres comme de la sienne ?</p>
            <div className='articleCompTextPaddedP'/>
            <p>Ce sont les questions qui se posent à Rivière, chef de la compagnie aéropostale d'Amérique du Sud.</p>
            <div className='articleCompTextPaddedP'/>
            <p>Là où beaucoup n'osent pas risquer de rendre un homme malheureux, Rivière, lui, risque leurs vies chaque nuit, pour acheminer du courrier.</p>
            <div className='articleCompTextPaddedP'/>
            <p>N'a t'il point de considération pour ces hommes ?</p>
            <p>C'est là tout le paradoxe : ces hommes, ses hommes, Rivière les chérit. Non pas comme une mère, en leur procurant chaleur et sécurité, mais comme un père, en leur arrachant froidement le meilleur d'eux même.</p>
            <p>Il leur fait en fait un honneur, celui d'inscrire leur vie dans quelque chose de plus grand, qui les dépasse.</p>
            <p>Rivière a les yeux rivés vers l'objectif, non vers l'homme qui le porte. Il lui tourne même le dos : rien n'est plus important que d'avancer.</p>
            <div className='articleCompTextPaddedP'/>
            <p>C'est parce qu'il est prêt à sacrifier des hommes, que des hommes sont prêts à mourir sous ses ordres.</p>
            <div className='articleCompTextPaddedP'/>
            <p>Rivière affirme, à travers son éthique : j'ai trouvé quelque chose de plus sacré que la vie d'un homme. Celui qui me suivra ne sera qu'un outil que je forgerai pour bâtir cette cathédrale. Et l'homme qui me donne sa vie ne mourra pas : il deviendra la pierre de ces murs, anonyme et célèbre en même temps.</p>
            <div className='articleCompTextPaddedImg saintExupery'>
                <img src={imageAvionRangé} alt="no file" />
                <p className='ArticleLegendeAvions'>Extrait de Vol de Nuit, Chapitre XIV</p>
                <div className='articleCompSaintExuperyLastText'>
                    <p>“</p>
                    <p>Une phrase lui revint : « Il s'agit de les rendre éternels… » Où avait-il lu cela ? « Ce que vous poursuivez en vous-même meurt. » II revit un temple au dieu du soleil des anciens Incas du Pérou. Ces pierres droites sur la montagne. Que resterait-il, sans elles, d'une civilisation puissante, qui pesait, du poids de ses pierres, sur l'homme d'aujourd'hui, comme un remords ? « Au nom de quelle dureté, ou de quel étrange amour, le conducteur de peuples d'autrefois, contraignant ses foules à tirer ce temple sur la montagne, leur imposa-t-il donc de dresser leur éternité ? » Rivière revit encore en songe les foules des petites villes, qui tournent le soir autour de leur kiosque à musique. « Cette sorte de bonheur, ce harnais… » pensa-t-il. Le conducteur de peuples d'autrefois, s'il n'eut peut-être pas pitié de la souffrance de l'homme, eut pitié, immensément, de sa mort. Non de sa mort individuelle, mais pitié de l'espèce qu'effacera la mer de sable. Et il menait son peuple dresser au moins des pierres, que n'ensevelirait pas le désert.</p>
                    <p>”</p>
                </div>
            </div>
            <button>Suivant</button>
        </div>
        <h5>Retrouvez notre buste</h5>
        <ProductDetailsProps data={DATA[21]} />
    </div>
  )
}
