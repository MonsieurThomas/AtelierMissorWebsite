import React from 'react'
import { DATA } from '../../data'
import { Product } from '../Product/Product'

export const BronzeBustes = () => {
  
    const filtered = DATA.filter((product) => {
        if ((product.productName === "Buste Napoléon Bronze Doré") 
          ||(product.productName === "Buste Nietzsche Bronze")
          ||(product.productName === "Buste Doestoievski Bronze")
          ||(product.productName === "Buste Marc Aurele Bronze")
          ){
            return product
          }
          return 0;
      })
    
    return (
    <div>
        <h2 className="titleBronze">Nos bronzes</h2>
        <div className="productsBronze">
            {filtered.map((product) => (
            <Product data={product} key={product.id}/>
        ))}
        </div>
    </div>
  )
}
