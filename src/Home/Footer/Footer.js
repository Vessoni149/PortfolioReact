import React from "react";
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import kayak from '../../assets/kayaking_white_24dp.svg';

export function Footer(){
  return(
      <footer>
        <div className="footer-icons-container">
          <a href="https://www.facebook.com/agustin.vessoni/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="https://www.instagram.com/agustinvessoni/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
          <img src={kayak} alt="kayak"></img>
          <a href="https://github.com/Vessoni149" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/agustin-vessoni-374128234/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
        <div>
          <p className="footer-update">Última actualización: 24 de enero de 2023</p>
        </div>
      </footer>
  )
}
