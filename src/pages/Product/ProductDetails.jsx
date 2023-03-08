import React, { useContext, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Product.css'
import { FaPaypal } from "react-icons/fa"
import { ShopContext } from '../../context/shop-context'

export const ProductDetails = () => {

  const location = useLocation();
  const props = location.state?.props || 'default value';

  function NewlineText(props) {
    const text = props.citationText;
    const newText = text.split('\n').map(str => <div>{str}</div>);
    return newText;
  }
  const newText = NewlineText(props)

  const { updateCartItemCount, cartItems } = useContext(ShopContext);
  const [productNumber, setProductNumber] = useState(cartItems[props.id] ? cartItems[props.id] : 1);

  const handleChange = (event) => {
    setProductNumber(Number(event.target.value))
    
  }

  return (
    <div className='containerProductDetails'>
      <div className='imgProductDetail'>
        <img src={props.productImage} alt="no file" />
      </div>
      <div className='containerTextProductDetail'>
        <h1>{props.productName}</h1>
        <div className='PriceAndFreeShippingContainerDetails'>
          <h2>€{props.price}EUR</h2>
          <h3>Livraison gratuite</h3>
        </div>
        <button className='CollectionButtonProductDetail'> <b>Collection: </b>{ props.collection } </button>
        <div className='QuantityInputContainerProductDetail'>
          <h3>Quantité</h3>
          <input type="number" placeholder={productNumber} onChange={((event) => {
            handleChange(event);
            updateCartItemCount(productNumber, props.id)
          })} /> 
        </div>
        <Link to='/cart'>
          <button className='ButtonProductDetail' onClick={() => updateCartItemCount(productNumber, props.id)}> Ajouter au panier</button>
        <button className='ButtonProductDetail secondButton' > Acheter maintenant</button>
        </Link>
        <div className='PaypalProductDetail'>
          <FaPaypal className='faPaypal' />
          <p>Payez en 4X sans frais pour les achats eligibles. En savoir plus</p>
        </div>
        <h1 className='titleCitationProductDetail'>{props.citationTitre}</h1>
        <div className='textCitationProductDetail'>{newText}</div>
      </div>
    </div>
  )
}
