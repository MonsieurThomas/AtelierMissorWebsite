import React, { useContext } from 'react'
import './Contacts.css'
import imageAtelier from "../../assets/atelier_960x500.webp"
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { ShopContext } from '../../context/shop-context'

export const Contacts = () => {

  const { setShowNavbar } = useContext(ShopContext)
  setShowNavbar(false);
  return (
    <div className='contactsContainer'>
        <img src={imageAtelier} alt="no file" />
        <h2>Contactez-nous</h2>
        <div className='contactsContainerFlex'>
            <h3>Une question ?</h3>
            <p className='contactJoignable'>Nous sommes joignables :</p>
            <p>Par téléphone du lundi au vendredi au 06 26 47 67 46</p>
            <p>Par e-mail à contact@ateliermissor.com</p>

            <h3>Recrutement</h3>
            <p>Nous sommes toujours à la recherche de nouvelles personnes dévouées et motivées pour accomplir de grandes choses.</p>
            <p className='contactPolyvalent'>Les profils polyvalents et volontaires sont appréciés et peuvent nous rejoindre à Nice. Stage possible également.</p>
            <p>Envoyez une candidature vidéo à recrutement@ateliermissor.com, nous en prendrons connaissance et vous recontacterons.</p>
            <p className='contactThanks'>Merci de ne pas venir à nos locaux sans rendez-vous.</p>
            <ContactForm />

        </div>

    </div>
  )
}
