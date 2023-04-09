import React from 'react'
import Navbar from '../navbar/Navbar'
import dev from '../../ressources/images/dev.gif'
import { NavLink } from "react-router-dom"
import Loading from './Loading'

export default function Propos() {
  return (

    <div>
        <Navbar/>
        <Loading/>
        <div className='propos'>

          <div className='contenu_propos'>
            <div className='left_propos'>
            <div className='titre_propos'>
          <h1 id='titre'>A propos</h1>
          </div>
          <h4>Bienvenue sur mon portfolio !</h4>
            <p>Je m'appelle Steven, j'ai 23 ans et je suis actuellement à la recherche d'une entreprise afin d'éffectuer une alternance pour une licence. Ce portfolio a été créé pour présenter mon parcours, mes compétences et mes réalisations en tant que développeur FullStack Junior.</p>
            <NavLink className="propos_link" to="/contact">Me contacter</NavLink>
                 </div>
                 <div className='right_propos'>
                  <img src={dev} alt=''/>
                 </div>
        </div>
        </div>
    </div>
  )
}
