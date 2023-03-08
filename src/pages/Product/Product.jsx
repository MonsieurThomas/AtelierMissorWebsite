import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

export const Product = (props) => {
  
    const { productName, productImage } = props.data
    return (
    <Link className='LinkClassiqueHome' to='/productDetail' state={{props: props.data}}>
    <div className="ensembleProduct">
        <img className="imgProduct" src={productImage} alt="no file" />
        <p className="nameProduct"> {productName}</p>
    </div> 
    </Link>
  )
}
