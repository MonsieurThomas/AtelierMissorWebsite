import React from 'react'

export const Courrier = () => {
  return (
    <div className='CourrierWhole'>
        <h2>Le Courrier de l'Atelier</h2>
        <p>Abonnez-vous pour recevoir anecdotes et promotions exclusives</p>
        <div className='CourrierFlex'>
            <input type="text" placeholder="Adresse e-mail" />
            <button>S'abonner</button>
        </div>
    </div>
  )
}
