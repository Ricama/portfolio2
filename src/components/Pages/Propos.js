import React from 'react'
import Navbar from '../navbar/Navbar'
import dev from '../../ressources/images/dev.gif'
import Loading from './Loading'
import CV from '../../ressources/cv.pdf'

export default function Propos() {
  const handleDownload = () => {
    const url = CV;
    const link = document.getElementById("cv");
    link.href = url;
    link.download = 'CV_Steven_Mahouasse.pdf';
    link.click();
  };
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
            <p>Je m'appelle Steven, j'ai 23 ans et je suis actuellement à la recherche d'une entreprise afin d'effectuer une alternance pour une licence. Ce portfolio a été créé pour présenter mon parcours, mes compétences et mes réalisations en tant que développeur FullStack Junior.</p>
            <a className='propos_link' id='cv' href='./' onClick={handleDownload}>Télécharger mon cv</a>
                 </div>
                 <div className='right_propos'>
                  <img src={dev} alt=''/>
                 </div>
        </div>
        </div>
    </div>
  )
}
