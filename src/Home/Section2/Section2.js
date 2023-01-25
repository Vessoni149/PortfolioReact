import React from "react";
import './Section2.css'
function Section2(props){
  return(
    <section className="section">
      <h2 className="edu-title">Educación</h2>
      <br></br>
      <ul className="edu-list">
        {props.children}
      </ul>
    </section>
    )
}

export { Section2 };