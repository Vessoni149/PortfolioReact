import React from "react";
import './Certificados.css';
import cert1 from '../assets/certificados/computacionBasica.jpg';
import cert2 from '../assets/certificados/preworkWindows.jpg';
import cert3 from '../assets/certificados/diploma-pensamiento-logico-1-algoritmosYDiagramasDeFlujo_page-0001.jpg';
import cert4 from '../assets/certificados/pensamientoLogicoEstructuras.jpg';
import cert5 from '../assets/certificados/pensamientoLogicoLenguajes.jpg';
import cert6 from '../assets/certificados/introWeb.jpg';
import cert7 from '../assets/certificados/programacionBasica.jpg';
import cert8 from '../assets/certificados/diploma-frameworks-javascript_page-0001.jpg';
import cert9 from '../assets/certificados/introReact.jpg';
import cert10 from '../assets/certificados/diploma-mobile-first_page-0001.jpg';
import cert11 from '../assets/certificados/git&github.jpg';
import cert12 from '../assets/certificados/diploma-solidity-celo.jpg';
import cert13 from '../assets/certificados/diploma-fundamentos-node.jpg';
import cert14 from '../assets/certificados/diploma-java-basico.jpg';
import cert15 from '../assets/certificados/diploma-java-oop.jpg';
export function Certificados(){
  return(
    <div>
    <h1 className="cert-title">Certificados</h1>
    <div className="gallery-container">
      <div className="gallery-item">
        <img src={cert1} alt="Computación básica"></img>
      </div>
      <div className="gallery-item">
        <img src={cert2} alt="preworkWindows"></img>
      </div>
      <div className="gallery-item">
        <img src={cert3} alt="Algoritmos y diagrama de flujos"></img>
      </div>
      <div className="gallery-item">
        <img src={cert4} alt="Funciones y estructuras de control"></img>
      </div>
      <div className="gallery-item">
        <img src={cert5} alt="Lenguajes de programación"></img>
      </div>
      <div className="gallery-item">
        <img src={cert6} alt="Intro a la web"></img>
      </div>
      <div className="gallery-item">
        <img src={cert7} alt="Programación básica"></img>
      </div>
      <div className="gallery-item">
        <img src={cert8} alt="Frameworks de javascript"></img>
      </div>
      <div className="gallery-item">
        <img src={cert9} alt="Introducción a React"></img>
      </div>
      <div className="gallery-item">
        <img src={cert10} alt="Diseño responsive - mobile first"></img>
      </div>
      <div className="gallery-item">
        <img src={cert11} alt="Git y Github"></img>
      </div>
      <div className="gallery-item">
        <img src={cert12} alt="Solidity con Celo"></img>
      </div>
      <div className="gallery-item">
        <img src={cert13} alt="Fundamentos de Node.js"></img>
      </div>
      <div className="gallery-item">
        <img src={cert14} alt="Introducción a Java SE"></img>
      </div>
      <div className="gallery-item">
        <img src={cert15} alt="Curso de Java SE Orientado a Objetos"></img>
      </div>
    </div>
    </div>
  )
}
