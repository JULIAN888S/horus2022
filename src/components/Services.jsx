import React, { useEffect } from "react";
import '../styles/services.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function ServicesCard(props) {
  useEffect(()=> {
    Aos.init({duration: 500});
    }, []);
    
    return(
      
        <div data-aos="fade-right"  className="service-container" >
            <img 
                className="image-service"
                src={require(`../assets/service-${props.image}.jpg`)} 
                alt={props.alt}/>  
            <div className="text-container-service">
              <p className="name-service">
                <strong>{props.service}</strong>
              </p>
              
              <p className="description-service">
                {props.description}
              </p>
            </div>    
        </div>
    )
}

export  default ServicesCard;