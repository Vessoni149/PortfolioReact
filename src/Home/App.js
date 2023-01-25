
import React from 'react';
import './App.css';
import { Section2 } from './Section2/Section2';
import { Educacion } from './Section2/Educacion/Educacion';
import { Experiencia } from './Section3/Experiencia/Experiencia';
import { Section3 } from './Section3/Section3';
import {Section1} from './Section1/Section1';
import { Section4 } from './Section4/Section4';
import { Section5 } from './Section5/Section5';
import { Footer } from './Footer/Footer';

function App() {
  const educaciones = [
    {fuente: "Platzi", descripcion:"Varios cursos, entre ellos: curso de Programación básica (HTML, CSS y JavaScript), Curso básico de React, curso profesional de Git y Github, Curso Introducción a Solidity."},
    {fuente: "Inst. Nac. de Tecnología Industrial - Sec. de Industria y Desarrollo Productivo- Min. de Economía de la Nación (Argentina)", descripcion:"Curso full stack de “Argentina Programa”. Aquí estudié las siguientes tecnologías: HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular, MySql, Java, SpringBoot. En éste curso construí mi primer portfolio."},
    {fuente:"Universidad Nacional de La Pampa, Facultad de Ingeniería, Argentina.", descripcion:"Analista Programador egresado en el año 2022."},
    {fuente: "Cursos autodidactas en YouTube", descripcion:"Cursos de HTML, CSS, JavaScript en el canal Lucas Dalto; curso de CSS y JavaScript en el canal Dorian Designs; curso de JavaScript, React y Git en el canal Fazt; entre otros."},
    {fuente:"Universidad Nacional de La Pampa, Facultad de Ciencias Económicas y Jurídicas, Argentina.", descripcion:"Abogado egresado en el año 2019."},
    {fuente:"Clases de inglés personales con profesora particular.", descripcion:"Desde febrero de 2020 a la actualidad, actualmente poseo un nivel pre-intermedio."}
  ]
  const experiencias = [
    {lugar:"Asesoría Letrada de Gobierno (Administración Pública, provincia de La Pampa)", descripcion: "Opiniones jurídicas de proyectos de leyes, clasificación de información jurídica (desde septiembre de 2019 hasta diciembre de 2022)."},
    {lugar:"Giochi", descripcion: "Atención al público en heladería (desde septiembre de 2017 a diciembre de 2017)."}
  ]

  return (
    <React.Fragment>
      <Section1/>
      <Section2>
        {educaciones.map(educacion => (
          <Educacion key={educacion.fuente} institucion={educacion.fuente} conocimiento={educacion.descripcion}/>
          ))}
        </Section2>
        <Section3>
          {experiencias.map(experiencia => (
            <Experiencia key={experiencia.lugar} trabajo={experiencia.lugar} tareas={experiencia.descripcion}/>
            ))}
        </Section3>
        <Section4/>
        <Section5/>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
