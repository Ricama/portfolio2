import React from 'react'
import Navbar from '../navbar/Navbar'
import html from "../../ressources/images/html.png"
import css from "../../ressources/images/css.png"
import js from "../../ressources/images/Js.png"
import php from "../../ressources/images/php.png"
import react from "../../ressources/images/react.png"
import sql from "../../ressources/images/sql.png"
import f from "../../ressources/images/f.png"
import boot from "../../ressources/images/boot.png"
import java from "../../ressources/images/java.png"
import sass from "../../ressources/images/sass.png"
import Loading from './Loading'

export default function Skills() {
  return (
    <div className='conteneur_skills'>
        <Navbar/>
        <Loading/>
        <div className='placement_skills'>
          <div className='titre_skills'>
          <h1 id='titre'>Experiences & skills</h1>
          </div>
          <div className='contenu_skills'>
            <div className='parcours_skills'>
            <div className='cards_left'>
                    <div  className='card one_card'>
                        <h1>Formation</h1>
                        <p>Jan 2022-2023</p>
                        <p>Développeur d'application Java</p>
                        <p>Openclassrooms - Paris(75)</p>
                    </div>
                    <div  className='card three_card'>
                    <h1>Formation</h1>
                        <p>Déc 2019-2020 (1an)</p>
                        <p>Développeur web et web mobile</p>
                        <p>AFPA - Beauvais(60)</p>
                    </div>
                    </div>
                    <div className='line'>
                      <div id='point1' className='point one_point'></div>
                      <div id='point2' className='point two_point'></div>
                      <div id='point3' className='point three_point'></div>
                      <div id='point4' className='point four_point'></div>
                    </div>
                    <div className='cards_right'>
                    <div  className='card two_card'>
                    <h1>Stage</h1>
                        <p>2020 (4mois)</p>
                        <p>Développeur Front-end</p>
                        <p>INSY2S - Lille(59)</p>
                    </div>
                    <div  className='card four_card'>
                    <h1>Formation</h1>
                        <p>2019 (3mois)</p>
                        <p>MS language et développement</p>
                        <p>Média-Management - Compiègne(60)</p>
                    </div>
                    </div>
            </div>
            <div className='tech_skills'>
              <div className='front'>
              <h1>Front-end</h1>
              <div className='front_line tech_line'></div>
                <div className='front_img'>
              <img src={html}alt=""/>
              <img src={css}alt=""/>
              <img src={js}alt=""/>
              <img src={react}alt=""/>
              <img src={boot} alt=""/>
              <img src={sass} alt=""/>
              </div>
              </div>
              <div className='back'>
                <h1>Back-end</h1>
                <div className='back_line tech_line'></div>
              <div className='back_img'>
              <img className='php' src={php}alt=""/>
              <img src={java} alt=""/>
              <img className='sql' src={sql} alt=""/>
              <img src={f} alt=""/>
              </div>
              </div>
            </div>
            </div>
            </div>
          </div>
  )
}

