import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import imageMarcAurele from "../../assets/statue_marc_aurele.webp"
import "./Articles.css"
import { ProductDetailsProps } from '../Product/ProductDetailsProps';
import { DATA } from '../../data';

export const MarcAurele = () => {

  const {setShowNavbar} = useContext(ShopContext)
  setShowNavbar(false);

  return (
    <div className='articleCompContainer'>
      <h1 className='articleCompTitle'>Marc Aurèle : Aux Hommes nobles le fardeau.</h1>
      <img className='articleCompTitleImgMarcAurele' src={imageMarcAurele} alt=" no file" />
      <div className='articleCompDateContainer marcAurele'>
          <p className='articleCompDate'>oct. 31, 2021</p>
          <p>Publié par: Atelier</p>
          <p>Missor</p>
      </div>
      <div className='articleCompTextPadded'>
        <p>Un jour, on se regarde dans la glace et il y a une fissure. Le temps passe et nous le voyons. On se demande : "Qu'as-tu fait?"</p>
        <div className='articleCompTextPaddedP'/>
        <p>Se regarder dans une glace. Pas pour voir ses rides ou les ravages du temps qui passe. Mais pour regarder son âme à travers ses yeux. Pour voir le fond, pour voir la honte.</p>
        <p>"Qu'as-tu fais de moi?"</p>
        <div className='articleCompTextPaddedP'/>
        <p>Ne pas pouvoir se regarder dans une glace, voilà ce qu'est la noblesse. Les gens finissent par accepter leur reflet, pour que cesse ce calvaire. Ils finissent par se faire une raison. Si la noblesse est le trait le moins partagé au monde, c'est bien parce que c'est dur de porter son fardeau. Chacun aimerait le jeter sur le côté du chemin, se sentir soudain léger et ne plus regarder en arrière. Et chacun le fait. La noblesse meurt par la main de chacun.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Se regarder dans une glace. Tout le monde se regarde dans une glace. Mais se regardent-ils vraiment? Ils se regardent pour savoir si ils sont présentables aux yeux du monde, mais ne se demandent pas si ils sont présentables à leurs propres yeux. Leur regard est léger, il survole. S'attarde sur un détail physique. Mais refuse de voir leur laideur.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Et puis un jour on rencontre quelqu'un de beau. Pas d'une beauté plastique, d'une autre beauté. D'une droiture, d'une fougue. D'une noblesse. L'enfant en nous se réveille. Nous sommes déjà grand mais il dit cela quand même. Il dit: "Quand je serai grand. Quand je serai grand, je serai comme lui." </p>
        <p>On se regarde dans la glace avec les yeux de cet enfant, plein de malice, plein de mépris. C'est pénible. Son existence est un calvaire. Alors nous l'oublions. Nous ne lui donnons pas à manger. Au lieu de grandir, il maigrit, et il finit par mourir.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Parfois, son fantôme revient et nous demande: "Qu'as-tu fais de moi ?" et nous rions. Nous rions intérieurement. Nous tournons en dérision ce rêve, nous l'appelons lubie, nous l'appelons chimère. Nous retournons dans le monde ordinaire sans prendre cet enfant par la main, nous revenons seul, sans miroir. Et nous nous noyons dans cette foule qui a aussi oublié cet enfant. Nous dansons dans cette grande fête, dans ce grand rire, dans ce grand oubli.</p>
        <p>La noblesse meurt par la main de chacun.</p>
        <div className='articleCompTextPaddedP'/>
        <p>Missor.</p>
        <button>Suivant</button>
      </div>
      <h5>Retrouvez notre buste</h5>
      <ProductDetailsProps data={DATA[11]} />

    </div>
  )
}
