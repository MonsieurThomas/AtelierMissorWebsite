import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { GoSearch } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css"
import { ShopContext } from '../../context/shop-context';


export const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const {showNavbar} = useContext(ShopContext);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return (
        <div className='containerNavbar'>
            <p className={`warningMessage${isSticky ? " sticky" : ""}`}>Livraison gratuite - Paiement 4 x sans frais</p>
            <div className={`navbar${isSticky ? " sticky" : ""}`} id={`${showNavbar ? "showNavbar" : ""}`}>
                <div > <Link to="/" className="navbar--title"> Atelier Missor </Link> </div>
                <div className="navbarItems">
                    <div className="scrollContainer collectionContainer">
                        <Link className="navbarItem">Collections</Link>
                        <span className="scrollButton"><MdKeyboardArrowDown /></span>
                        <div className='collectionMenu'>
                            <Link className='collectionMenuLink' to='/collection' state={{ matiere: 'platre' }}>Buste Classique</Link>
                            <Link className='collectionMenuLink' to='/collection' state={{ matiere: 'noir' }}>Buste Noir</Link>
                            <Link className='collectionMenuLink' to='/collection' state={{ matiere: 'bronze' }}>Buste Bronze</Link>
                        </div>
                    </div>
                    <Link to='/ourHistory' className="navbarItem" >Notre Histoire</Link>
                    <div className='scrollContainer gallerieContainer'>
                        <Link to='/gallery' className="navbarItem">Galerie </Link>
                        <span className="scrollButton"><MdKeyboardArrowDown /></span>
                        <div className='galerieMenu'>
                            <p>L'Atelier</p>
                            <p>Client</p>
                            <p>Statue</p>
                            <p>Vidéo</p>
                        </div>
                    </div>
                    <Link to='/statueUnique' className="navbarItem">Statue Unique</Link>
                    <Link to='/ecrits' className="navbarItem">Ecrits</Link>
                    <Link to='/contacts' className="navbarItem">Contacts</Link>
                    <Link className="navbarItem navbarGlass"><GoSearch /></Link>
                    <Link to='/cart'><span className="navbarItem navbarBag"><IoBagOutline /></span></Link>
                </div>
            </div>
        </div>
    )
}
