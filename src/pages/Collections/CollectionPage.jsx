import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import { DATA } from '../../data'
import { Product } from '../Product/Product'
import "./Collection.css"

export const CollectionPage = () => {
  
  const { setShowNavbar } = useContext(ShopContext)
    setShowNavbar(false);
  const location = useLocation();
  const matiere = location.state?.matiere || 'default value';
  const filtered = DATA.filter((product) => {
    return product.material === matiere
  })

  return (
    <div className='containerCollection'>
      <h1 className='titleCollection'> Collection {matiere}</h1>
      <div className='products'>
          {filtered.map((product) => (
          <Product data={product} key={product.id}/>
          ))}
      </div>
    </div>
  )
}
