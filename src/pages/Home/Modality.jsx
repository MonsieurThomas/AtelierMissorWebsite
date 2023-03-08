import React from 'react'
import bustePlatre from "../../assets/EnsembleBustePlatre.webp"
import busteEmballage from "../../assets/Photo_Emballage_modalites_800x371.jpeg"
import hommeEmballage from "../../assets/Sans_titre-1_928x384.webp"
import "./Home.css"

export const Modality = () => {
  return (
    <div className='modalityWhole'>
        <h1 className='titleContainerModality'>MODALITÉS</h1>
        <div className='modalityFlex'>
            <img className="modalityImg" src={bustePlatre} alt="no file"/>
            <div className="modalityText">
                <h1>Paiement</h1>
                <p>Ayez la possibilité de payer en quatre
                fois sans frais et profitez de la livraison gratuite.</p>
            </div>
        </div>
        <div className='modalityFlex'>
            <img className="modalityImg" src={busteEmballage} alt="no file" />
            <div className="modalityText">
                <h1>Emballage</h1>
                <p>Notre emballage sera accompagné 
                    d'une lettre manuscrite attestant 
                    de l'authenticité de la statue.</p>
                <p>Vous pouvez nous spécifier une date souhaitée 
                    d'envoi à travers le formulaire dédié lors de 
                    l'achat dans le cadre d'un cadeau.</p>
            </div>
        </div>
        <div className='modalityFlex'>
            <img className="modalityImg" src={hommeEmballage} alt="no file" />
            <div className="modalityText">
                <h1>Livraison et Retour</h1>
                <p>La livraison est gratuite partout dans le monde, avec Chronopost.</p>
                <p>Aussi, si votre buste ne vous convenait pas, vous pouvez nous le retourner gratuitement
                pendant 30 jours, sans justifications.</p>
            </div>
        </div>
    </div>
  )
}
