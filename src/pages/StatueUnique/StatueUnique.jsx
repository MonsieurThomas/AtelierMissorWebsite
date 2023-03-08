import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import image from "../../assets/MissorStatueUnique.webp"
import './StatueUnique.css'
import { ContactForm } from '../../components/ContactForm/ContactForm'

export const StatueUnique = () => {
   const { setShowNavbar } = useContext(ShopContext)
    setShowNavbar(false)
   return (
    <div className='uniqueContainer'>
        <img src={image} alt="no file"/>
        <h1>Statue Unique</h1>
        <div className='uniqueContainerText'>
            <p>Cette année, Missor a décidé de faire quelques statues sur commande.</p>
            <p>Des pièces uniques pour honorer vos proches, ou un homme illustre qui a guidé vos pas.</p>
            <p>Rédigez votre demande et nous la lui transmettrons.</p>
            <ContactForm />
        </div>

    </div>
  )
}
