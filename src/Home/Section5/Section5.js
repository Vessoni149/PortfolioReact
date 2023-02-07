import React from "react";
import './Section5.css'
function Section5(){
    return(
        <section className="section5" id="proyectos">
            <h2>Prácticas y proyectos</h2>
            <br></br>
            <ul className="ulProyectos">
            <li><a href="https://vessoni149.github.io/Curso-React_Platzi/" target='_blank' rel="noreferrer">
                To do list realizada con React - curso de Platzi.</a></li>
            <li><a href="https://vessoni149.github.io/react-taskList-Fazt/" target='_blank' rel="noreferrer">
                Task list realizada con React - curso Fazt, YouTube.
            </a></li>
            <li><a href="https://vessoni149.github.io/contadorClicsFreeCodeCamp/" target='_blank' rel="noreferrer">
            Contador de clics con React - FreeCodeCamp, YouTube.
            </a></li>
            <li><a href="https://vessoni149.github.io/calculadoraFreeCodeCamp/" target='_blank' rel="noreferrer">
            Calculadora con React - FreeCodeCamp, YouTube.
            </a></li>
            <li><a href="https://vessoni149.github.io/testimoniosFreeCodeCamp/" target='_blank' rel="noreferrer">
             Testimonios con React - FreeCodeCamp, YouTube.
            </a></li>
            <li><a href="https://vessoni149.github.io/taskListFreeCodeCamp/" target='_blank' rel="noreferrer">
            TaskList con React - FreeCodeCamp, YouTube.
            </a></li>
            <li><a href="https://vessoni149.github.io/ResponsiveDesign-PlatziCourse.github.io/" target='_blank' rel="noreferrer">
            Proyecto responsive mobile first - curso de Platzi.
            </a></li>
            <li><a href="https://vessweb.web.app/" target='_blank' rel="noreferrer">
            Mi primer portfolio web - curso "Argentina Programa".
            </a></li>
            <li><a href="https://vessoni149.github.io/ConsumoApiRickAndMorty/" target='_blank' rel="noreferrer">
            Consumo de API con React.
            </a></li>
            </ul>
        </section>
    )
};

export { Section5 };