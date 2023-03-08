import { useContext } from 'react'
import Missor from "../../assets/Banniere_Missor_1300x500.webp"
import Coulage from "../../assets/arrierePlan.png"
import statues from "../../assets/EnsembleBustePlatre.webp"
import './OurHistory.css'
import { Courrier } from '../Home/Courrier'
import { ShopContext } from '../../context/shop-context'


export const OurHistory = () => {

  const { setShowNavbar } = useContext(ShopContext)
  setShowNavbar(false);
  return (
    <div className='containerOurhistory'>
        <h1>Notre Histoire</h1>

        <p>Après une jeunesse de vaurien à Paris, la vie m’a donné une seconde chance. J’ai traversé la France et me suis installé à Nice, avec la ferme résolution de mener la vie d’un honnête homme.</p>
        <p>Je vivais dans une modeste chambre de bonne, loin du confort que j’avais connu pendant toute ma vie, mais c’est à ce moment là que je compris réellement ce qu’était la gratitude.</p>
        <p>Quand chaque soir avant de dormir, je remerciais ceux qui avaient construit les murs et le toit qui m’abritaient, alors que jamais je n’avais connu existence aussi misérable.</p>
        <img src={Missor} alt="no file" className='imgOurHistory' />
        <span />
        <h1>Les statues déboulonnées</h1>
        <p>C’est aussi à cette période que j’ai été choqué de voir des ignares déboulonner des statues. Ces imbéciles qui n’arrivaient pas à la cheville de ceux qu’ils essayaient de démolir. Ces ingrats qui n’avaient jamais rien fait de leur vie et qui, du haut de leur prétention pensaient pouvoir faire mieux que tout le monde.</p>
        <p>C’est cette ingratitude qui me donnait tant de mépris, et qui me donnait la force de remercier chaque soir, encore plus fort, ceux qui avaient construit nos toits.</p>
        <p>Je chérissais les souvenirs de mes parents, moi qui n’avais jamais montré le moindre signe de gratitude envers eux, et chaque jour j’essayais d’être la personne qu’ils auraient voulu que je sois. Mes parents étaient des peintres, aussi, je décidais que c’était par l’art que j’allais rendre à la société ce qu’elle m’avait donné, la deuxième chance que je ne méritais pas, mais qui m’avait été offerte.</p>
        <img src={Coulage} alt="no file" />
        <span className='borderBotton'/>
        <p>Je débutais à trente ans la sculpture dans mon petit atelier, avant d’être rejoint par certaines des personnes les plus admirables qu’il m’a été donné de rencontrer, et qui voulaient comme moi, combattre cette ingratitude qui caractérise notre génération. Avec eux, j’ai fondé cet atelier de sculpture, qui a pour ambition d’honorer les grands hommes de notre histoire, les honorer assez fort pour que, de là d’où ils nous regardent, ils n’entendent pas les bruits de ces imbéciles et de ces ingrats, qui oublient bien vite ceux qui ont construit leurs toits.</p>
        <img src={statues} alt="no file" />
        <button>Collections</button>
        <Courrier />

    </div>
  )
}
