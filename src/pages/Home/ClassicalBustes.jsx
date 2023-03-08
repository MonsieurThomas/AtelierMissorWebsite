import React from 'react'
import { DATA } from '../../data'
import "./Home.css"
import { Product } from '../Product/Product'

export const ClassicalBustes = () => {

  
  const filtered = DATA.filter((product) => {
    if (product.material === "platre" && product.id !== 22) {
      return product
    }
    return 0
  })
  return (
    <div>
      <h1 className="titleClassicalBuste">NOS BUSTES</h1>
      <div className="products">
        {filtered.map((product) => (
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}


