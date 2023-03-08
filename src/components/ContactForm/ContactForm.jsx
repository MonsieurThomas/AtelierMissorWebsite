import React from 'react'
import "./ContactForm.css"

export const ContactForm = () => {
  return (
    <div className='contactFormContainer'>
        <div className='contactFormContainerText'>
            <div className='contactFormBorder' />
            <h5>Nom</h5>
            <input type="text" placeholder='Votre nom' />
            <h5>Email</h5>
            <input type="text" placeholder='your@email.com' />
            <h5>Message</h5>
            <textarea type="text" />
            <button>Soumettre</button>
        </div>
    </div>
  )
}
