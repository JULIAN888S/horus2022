import React from "react"
import Services from "../components/Services.jsx"
import Welcome from "../components/Welcome"
import OurClients from "../components/OurClients"
function Home (){
    return(
        <div>
            <Welcome/>
            <Services 
                service='Desarrollo web' 
                description='Desarrollamos páginas web para su negocio utilizando modernas herramientas con los mejores patrones de desarrollo de software. ' 
                image='dev'
                alt='imagen relacionada'>
            </Services>
            <Services 
                service='Diseño Grafico' 
                description='Realizamos piezas graficas en formato digital para su emprendimiento.' 
                image='design'
                alt='imagen relacionada'>
                </Services>
                
                <Services
                service='Motion graphics'
                description='Creamos anmaciones'
                image='animation'
                alt='imagen relacionada'></Services>
            <OurClients></OurClients>

        </div>
    )
}

export default Home