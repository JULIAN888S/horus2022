import React, { useEffect } from "react";
import Styles from "../styles/welcome.css";

import image from "../assets/welcome.jpg"
function Welcome (props) {
    
    return(
        <div  className="main-container">
        <div className="text-block" >  
        <span></span>
        <span></span>
        <h2>¡NOSOTROS SOMOS HORUS WEB COLOMBIA! </h2>
        <p>Somos una empresa Colombiana que se enfoca en brindar soluciones y 
            servicios de sitios web a las pequeñas y medianas empresas con el 
            fin de generar mayor visibilidad comercial para poder llegar a nuevos 
            clientes y generar mayores ingresos. <br/>

            Nos encantaría que conocieras nuestro catálogo de servicios, 
            que nos de la oportunidad de hacer más visible tu negocio,
            no dudes en contactarnos.
            <span></span>
            <br/>
            <strong>¡Bienvenido!</strong></p>
        </div>  
        <img src={image} alt="Welcome" width="500" height="600"/>
        
        </div>
    )
}

export default Welcome