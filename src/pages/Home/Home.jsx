import React from 'react'
import  {useContext, useEffect} from 'react'
import "./Home.css"
import { Article } from './Article'
import { ClassicalBustes } from './ClassicalBustes'
import { BronzeBustes } from './BronzeBustes'
import { Modality } from './Modality'
import { LastArticles } from './LastArticles'
import { Courrier } from './Courrier'
import { ShopContext } from '../../context/shop-context'

export const Home = () => {

  const { setShowNavbar } = useContext(ShopContext)
  if (window.scrollY < 40){
    setShowNavbar(true)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowNavbar]);
  
  return (
    <div className='container'>
        <BronzeBustes />
        <Article />
        <ClassicalBustes />
        <Modality />
        <LastArticles />
        <Courrier />
    </div>
  )
}
