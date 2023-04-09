import { NavLink } from "react-router-dom"
import logo from "../../ressources/images/logo.png"
import gitw from "../../ressources/images/gitw.png"
import gitg from "../../ressources/images/gitg.png"
import nav from "../../ressources/images/nav.png"
import croix from "../../ressources/images/croix.png"
import { useState } from "react";

export default function Navbar(){

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  function buttonNav() {
    if(isOpen === false){
      document.getElementById("nav").style.zIndex = "2";
      setIsOpen(true);
    }else{
      document.getElementById("nav").style.zIndex = "-1";
      setIsOpen(false);
    }
  };

  function onWindowResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 820) {
      document.getElementById("nav").style.zIndex = "2";
    }
    if (screenWidth <= 820) {
      document.getElementById("nav").style.zIndex = "-1";
      setIsOpen(false);    }
  }
  window.addEventListener('resize', onWindowResize);

return(
  <div>
  <div onClick={buttonNav} className="collapse oui"><img src={isOpen ? croix : nav} alt=""/></div>
<nav className="nav" id="nav">
  <div className="navtop">
  <a className="logo active" aria-current="page" href="/"><img className="navlogo" alt="" src={logo}/></a>
  <h4>Steven Mahouasse</h4>
  <p>Web développeur</p>
  </div>
  <div className="divnavlink">
  <NavLink className="navlink navlinktop" to="/" activeclassname="active">A propos</NavLink>
  <NavLink className="navlink" to="/skills" activeclassname="active">Skills</NavLink>
  <NavLink className="navlink" to="/projets" activeclassname="active">Projets</NavLink>
  <NavLink className="navlink" to="/contact" activeclassname="active">Contact</NavLink>
  </div>
  <div className="divgit">
    <a href="https://github.com/Ricama">
  <img id="menu" className="navgit" alt="Logo github" src={isHovered ? gitg : gitw} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
  </a>
  </div>
</nav>
</div>
);
}
