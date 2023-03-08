import React, { useContext, useState } from 'react'
import './ProductDetailsProps.css'
import { FaPaypal } from "react-icons/fa"
import { ShopContext } from '../../context/shop-context';

export const ProductDetailsProps = (props) => {

  function NewlineText(props) {
    const text = props.data.citationText;
    const newText = text.split('\n').map(str => <div>{str}</div>);
    return newText;
  }
  const newText = NewlineText(props)

  const { addToCart, updateCartItemCount, cartItems } = useContext(ShopContext);
  const [productNumber, setProductNumber] = useState(cartItems[props.data.id] ? cartItems[props.id] : 1);

  const handleChange = (event) => {
    setProductNumber(Number(event.target.value))
    
  }

  return (
    <div className='containerProductDetails'>
      <div className='imgProductDetail'>
        <img src={props.data.productImage} alt="no file" />
      </div>
      <div className='containerTextProductDetail'>
        <h1>{props.data.productName}</h1>
        <div className='PriceAndFreeShippingContainerDetails'>
          <h2>€{props.data.price}EUR</h2>
          <h3>Livraison gratuite</h3>
        </div>
        <button className='CollectionButtonProductDetail'> <b>Collection: </b>{ props.data.collection } </button>
        <div className='QuantityInputContainerProductDetail'>
          <h3>Quantité</h3>
          <input type="number" placeholder={productNumber} onChange={((event) => {
            handleChange(event);
            updateCartItemCount(productNumber, props.data.id)
          })} /> 
        </div>
        <button className='ButtonProductDetail' onClick={() => addToCart(props.data.id, productNumber)}> Ajouter au panier</button>
        <button className='ButtonProductDetail secondButton' > Acheter maintenant</button>
        <div className='PaypalProductDetail'>
          <FaPaypal className='faPaypal' />
          <p>Payez en 4X sans frais pour les achats eligibles. En savoir plus</p>
        </div>
        <h1 className='titleCitationProductDetail'>{props.data.citationTitre}</h1>
        <div className='textCitationProductDetail'>{newText}</div>
      </div>
    </div>
  )
}
