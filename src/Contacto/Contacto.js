import React from "react";
import './Contacto.css';
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import kayak from'../assets/kayaking_white_24dp.svg';

export function Contacto(){
  function enviarEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_c4bxwx6','template_sqwj92m',e.target,'whpWO3QHie5g744dU').then(res=>(
      // eslint-disable-next-line
      alert("Email enviado!"), 
      console.log(res)
      ))
  }
  return(<div>
    <h1 className="contact-title">Escríbeme</h1>
    
    <div className="container">
    
      <form onSubmit={enviarEmail} className="form">
        
          <div>
            <label>Nombre *</label>
            <input type="text" required name="nombre"></input>
          </div>
          <div>
            <label>Email *</label>
            <input type="email" required name="email"></input>
          </div>
          <div>
            <label>Empresa</label>
            <input type="text" name="empresa"></input>
          </div>
          <div>
            <label>Telefono</label>
            <input type="text" name="phone"></input>
          </div>
          
          <div className="block">
            <label>Mensaje *</label>
            <textarea type="text" required name="mensaje" rows="3"></textarea>
          </div>
          <div className="block">
          <button type="submit">Enviar correo</button>
          </div>
        
      </form>
      <div className="contact-info">
        <h3 className="contact-info-title">Más información</h3>
        <ul className="contact-info-list">
          <li>
          <FontAwesomeIcon icon={faLocationDot}/> Zapopan, Jalisco, México.
          </li>
          <li>
          <FontAwesomeIcon icon={faWhatsapp}/> +54 2954 311705
          </li>
          <li><FontAwesomeIcon icon={faEnvelope}/> developvess@gmail.com</li>
        </ul>
        <p>Puede contactarme a través de este formulario, escribirme vía mail, o por mensaje directo en mis redes sociales. Telefonicamente sólo Whatsapp (llamada o mensaje)</p>
        <div className="icons-container">
          <a href="https://www.facebook.com/agustin.vessoni/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="https://www.instagram.com/agustinvessoni/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
          <img src={kayak} alt="kayak"></img>
          <a href="https://github.com/Vessoni149" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/agustin-vessoni-374128234/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
      </div>
    </div>
  </div>)
}