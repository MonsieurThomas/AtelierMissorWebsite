import React from 'react'
import "./Home.css"
import pictureMissor from "../../assets/St_Louis_Bandeau_site_web_928x384.webp"

export const Article = () => {
  return (
    <div className="articleEnsemble">
        <div className='articleImgContainer'>
          <img className="imgMissor"src={pictureMissor} alt="no file"/>
        </div>
        <div className='articleTextContainer'>
            <h1 className="articleTitle">L'ATELIER</h1>
            <p className="articleText">
            Je débutais à trente ans la sculpture dans mon
            petit atelier, avant d’être rejoint par certaines
            des personnes les plus admirables qu’il m’a été donné
            de rencontrer, et qui voulaient comme moi, combattre
            cette ingratitude qui caractérise notre génération.
            </p>
            <p className="articleYellowtext">Notre histoire</p>
        </div>


    </div>
  )
}
