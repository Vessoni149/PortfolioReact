import React from "react";
import './Experiencia.css';
function Experiencia(props){
    return(
        <div className="div-exp">
            
            <p className="p-trabajo">{props.trabajo}</p>
            <p className="p-tareas">{props.tareas}</p>
        </div>
    )
}
export { Experiencia };