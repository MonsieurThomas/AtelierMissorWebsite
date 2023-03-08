import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './Gallery.css'

export const Gallery = () => {

    const { setShowNavbar } = useContext(ShopContext)
    setShowNavbar(false);
   
    return (
      <div className='galleryContainer'>
            <h1>I could not fetch the data of the Shoppify website, or the Instagram page</h1>
      </div>
    );
  };