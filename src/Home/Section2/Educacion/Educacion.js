import React from "react";
import './Educacion.css';

function Educacion(props){
    return(
        <div className="eduContainer">
            <p className="edu-inst">{props.institucion}</p>
            <p className="edu-conocimiento">{props.conocimiento}</p>
            <br></br>
        </div>
    )
}
export { Educacion };