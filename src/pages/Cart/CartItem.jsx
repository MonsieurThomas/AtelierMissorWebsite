import React, {useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';

export const CartItem = (props) => {
    
    const { productImage, productName, price, collection, id, priceNumber } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, setCartToZero } = useContext(ShopContext)
    const [cartNumber, setCartNumber] = useState(cartItems[id]);

    const handleChange = (event) => {
        setCartNumber(Number(event.target.value));
    }
    
  return (
    <div className='CartItemBorder'>
            <div className='CartItemContainer'>
                <div className='CartItemContainerImgPart'>
                    <Link className='CartItemContainerLink' to='/productDetail' state={{props: props.data}}>
                        <img src={productImage} alt="no file" />
                    </Link>
                    <div className='CartItemContainerNamePart'>
                        <Link className='CartItemContainerLink' to='/productDetail' state={{props: props.data}}>
                            <h4>{productName}</h4>
                        </Link>
                        <Link className='CartItemContainerLink' to='/productDetail' state={{props: props.data}}>
                            <h5>{collection}</h5>
                        </Link>
                        <button onClick={() => setCartToZero(id)}>Supprimer</button>
                    </div>
                </div>
                <div className='CartItemContainerPartPrice'>
                    <h3 className='CartItemContainerPrice'>€{price} EUR</h3>
                    <div className='CartItemContainerPriceInput'>
                        <input type="number" value={cartItems[id]} onChange = {((event) => {
                            handleChange(event)
                            updateCartItemCount(cartNumber, id)
                        })}/>
                        <button className='CartItemContainerPriceInputMinusButton' onClick={() => removeFromCart(id)}> - </button>
                        <button className='CartItemContainerPriceInputPlusButton' onClick={() => addToCart(id)}> + </button>
                    </div>
                    <h3 className='CartItemContainerPrice second'>€{priceNumber * cartItems[id]} EUR</h3>
                </div>
            </div>
        </div>
  )
}
