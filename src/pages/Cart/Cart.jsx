import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { DATA } from '../../data'
import { FaCcPaypal } from "react-icons/fa";
import "./Cart.css"
import { CartItem } from './CartItem'

export const Cart = () => {

    const { setShowNavbar, cartItems, getTotalCartAmount } = useContext(ShopContext)
    const result = getTotalCartAmount();
    setShowNavbar(false);
  return (
    <div className='cartContainer'>
        <h1 className='cartContainerFirstTitle'>Votre panier</h1>
      <div className='cartContainerTitles'>
        <p>Produit</p>
        <div className='cartContainerTitleRightSection'>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
        </div>
      </div>
        <div className='cartContainerBorder' />
        <div>
          {
          // eslint-disable-next-line
          DATA.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })}
        </div>
        <div className='cartContainerBottomPart'>
          <div className='cartContainerInputPart'>
            <h2>Instructions spéciales</h2>
            <textarea type="text" placeholder='Ajouter une note' />
          </div>
          <div className='cartContainerButtonPart'>
            <h1>€{result.toFixed(2)} EUR</h1>
            <button className='cartButtonPayment' >Paiement</button>
            <button className='cartButtonPaypal'><span className='CartIcon'><FaCcPaypal /></span></button>
          </div>
        </div>
    </div>
  )
}
