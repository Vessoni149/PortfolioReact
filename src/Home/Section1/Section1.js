import React from "react";
import './Section1.css';
import imgPerfil from '../../assets/yo3.jpg';
	function Section1(){
  	return(
      <section className="section1" id="home">
        <div className="div-img-container">
          <div className="img-container">
      		  <img className="img-perfil" src={imgPerfil} alt=""></img>
          </div>
          <h1>Agustin Vessoni</h1>
          <h5>Front End Developer</h5>
        </div>
        <br></br>
        <div className="div-about">
					<h2>Sobre mi</h2>
					<p>Mi nombre es Agustin, tengo 28 años, soy Argentino nacido en la Ciudad de Buenos Aires. Viví la mayor parte de mi vida en Santa Rosa (La Pampa), allí etudié en la Universidad Nacional de La Pampa las carreras de Abogacía y Analista Programador. Luego de haber terminado Abogacía me di cuenta de que mis posibilidades laborales no eran las que quería, después de haber vivido una experiencia de intercambio universitario buscaba tener la posibilidad de trabajar en distintos paises. Fue así como encontre la programación como posibilidad de ampliar mis ofertas laborales. Así fue que realicé mi segunda carrera universitaria, además de haber realizado varios cursos de forma autodidacta.</p>
        </div>
      </section>
    )
 }

 export {Section1};