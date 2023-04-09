import React from 'react'
import Navbar from '../navbar/Navbar'
import api from "../../ressources/images/croix.png"
import html from "../../ressources/images/html.png"
import css from "../../ressources/images/css.png"
import js from "../../ressources/images/Js.png"
import portfolio from "../../ressources/images/portfolio.png"
import react from "../../ressources/images/react.png"
import sql from "../../ressources/images/sql.png"
import f from "../../ressources/images/f.png"
import java from "../../ressources/images/java.png"
import Loading from './Loading'
import paymybuddy from '../../ressources/images/paymybuddy.png'
import paymybuddyc from '../../ressources/images/paymybuddyc.png'
import safety from '../../ressources/images/safety.png'
import logo from '../../ressources/images/logo.png'
import car from '../../ressources/images/car.png'
import heme from '../../ressources/images/Heme.png'

function Projet(titre,image,imagef,technologies,id_projet,description,git){
  this.titre = titre;
  this.image = image;
  this.imagef = imagef;
  this.technologies = technologies;
  this.id_projet = id_projet;
  this.description = description;
  this.git = git;
}

export default function Projets
() {

  const listProjets = [];
  const api1 = new Projet("Portfolio",logo,portfolio,[html,css,js,react],1,"Projet personnel de portfolio react fais exclusivement en html css et javaScript en total autonomie","https://www.google.com/");
  const api2 = new Projet("Pay My Buddy",paymybuddy,paymybuddyc,[java,f,sql,html],2,"Projet OpenClassroom de conception d'une application web Java de A à Z qui avais pour but de gérer des transactions(envoi et reception)","https://github.com/Ricama/PayMyBuddy");
  const api3 = new Projet("SafetyNet",safety,null,[java,f,sql],3,"Projet OpenClassroom de conception d'une API avec Spring Boot qui renvoyais un fichier Json avec les information demander selon la requête effectuer","https://github.com/Ricama/alert");
  const api4 = new Projet("Park'it",car,null,[java],4,"Projet Openclassroom test d'implémentation d'une fonctionnalité, ce projet consistais à récupérer un projet régler les erreurs implémenter les nouvelles fonctionnalités et les tester","https://github.com/Ricama/Projet-4");
  const api5 = new Projet("Heme Biotech",heme,null,[java],4,"Projet Openclassroom de débuggage d'une application Java, cela consiste a importer le projet le comprendre et régler les bugs" ,"https://github.com/Ricama/Projet2");

  listProjets.push(api1,api2,api3,api4,api5);
function Popup(id){
const card = listProjets.find(function(card) {
  return card.id_projet === id;
});
const technologies = card.technologies.map(tech => `<img src="${tech}" alt="">`).join('');

const imagePopup = technologies ? `<div class="technologie_popup"><h1>Technologies</h1><div class="image_popup">${technologies}</div></div>` : '';

document.getElementById("contenu_popup").innerHTML = `
  <h1>${card.titre}</h1>
  <div class="contenu_pop">
  ${card.imagef ? `<img src="${card.imagef}" alt="">` : ''}
  <h1>Description</h1>
  <p>${card.description}</p>
  <a href="${card.git}">Lien du projet Git</a>
  ${imagePopup}
  </div>
`;
document.getElementById("popup").style.display = "block";
document.querySelector(".projets").style.opacity = "0.8";
document.querySelector(".collapse").style.opacity = "0";
document.querySelector(".nav").style.opacity = "0.8";
document.body.style.overflow="hidden";
}

function ClosePopup(){
  document.getElementById("popup").style.display = "none";
document.querySelector(".projets").style.opacity = "1";
document.querySelector(".collapse").style.opacity = "1";
document.querySelector(".nav").style.opacity = "1";  
document.body.style.overflow="auto";
}


  return (
    <div>
        <Navbar/>
        <Loading/>
        <div className='popup' id='popup'>
        <div onClick={ClosePopup} className="close_popup"><img src={api} alt=""/></div>
        <div id="contenu_popup" className='contenu_popup'></div>
        </div>
        <div className='projets'>
          <div className='titre_projets'>
          <h1 id='titre'>Mes Projets</h1>
          </div>
          <div className='contenu_projets'>
          {listProjets.map(element => {
            return(
              <div className='projet_item' key={element.id_projet} onClick={() => Popup(element.id_projet)}>
                <h4>{element.titre}</h4>
                <img src={element.image} alt=''/>
              </div>
            );
          })}
        </div>
        </div>
    </div>
  )
}
