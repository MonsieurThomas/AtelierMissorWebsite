import React from 'react'
import { TfiYoutube } from "react-icons/tfi"
import { SiInstagram } from "react-icons/si"
import { TfiFacebook } from "react-icons/tfi"
import { GrAmex } from "react-icons/gr"
import { SiApplepay } from "react-icons/si"
import { GrBitcoin } from "react-icons/gr"
import { RiMastercardFill } from "react-icons/ri"
import { FaPaypal } from "react-icons/fa"
import { FaCcVisa } from "react-icons/fa"
import { MdKeyboardArrowDown } from "react-icons/md";

import "./Footer.css"


export const Footer = () => {
  return (
    <div className='FooterWhole'>
      <div className="FooterFlex">
        <ul className='FooterText'>
          <li>Questions Fréquentes</li>
          <li>Contactez-nous</li>
          <li>Conditions Générales de Vente</li>
          <li>Mentions légales</li>
          <li>Conditions d'utilisation</li>
          <li>Politique de confidentialité</li>
          <li>Politique de remboursement</li>
        </ul>
        <ul className='FooterReseau'>
          <li><a href='https://www.facebook.com/Ateliermissor/'><TfiFacebook /> <span>Facebook</span></a></li>
          <li><a href='https://www.instagram.com/atelier.missor/'><SiInstagram/> <span>Instagram</span></a></li>
          <li><a href='https://www.youtube.com/@Missor/'><TfiYoutube /> <span>Youtube</span></a></li>
        </ul>
      </div>
      <div className='FooterAuthorRight'>
        <p>Droits d'auteur © 2023 Romain Thomas.</p>
        <div className='FooterButton'>
          <button className="FooterBtton">Français <span><MdKeyboardArrowDown/></span></button>
          <button>EUR€ <span><MdKeyboardArrowDown/></span></button>
        </div>
      </div>
      <div className='FooterLogo'>
        <span className='amex'><GrAmex/></span>
        <span className='apple'><SiApplepay/></span>
        <span className='bitcoin'><GrBitcoin /></span>
        <span className='masterCard'><RiMastercardFill /></span>
        <span className='paypal'><FaPaypal /></span>
        <span className='visa'><FaCcVisa /></span>
      </div>

    </div>
  )
}
