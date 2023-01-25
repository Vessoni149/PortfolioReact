import React from "react";
import './Section3.css';
function Section3(props){
  return(
    <section className="section exp-section">
      <h2 className="exp-title">Experiencia Laboral</h2>
      <br></br>
      <ul className="exp-list">
        {props.children}
      </ul>
      <br></br>
    </section>
    )
}
export {Section3};