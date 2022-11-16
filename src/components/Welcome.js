import React, { useEffect } from "react";
import Styles from "../styles/welcome.css";

import image from "../assets/welcome.jpg"
function Welcome (props) {
    
    return(
        <div  className="main-container">
        <div className="text-block" >  
        <h2>Nosotros somos Horus Web Colombia!</h2>
        <p>Ofrecemos las mejores opciones de desarrollo web y diseño grafico para su empresa y emprendimiento</p>
        </div>  
        <img src={image} alt="Welcome" width="500" height="600"/>
        
        </div>
    )
}

export default Welcome