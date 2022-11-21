import Services from "../components/Services"
import Media from "../components/Media"


function ServicesPage(){
    
    
    return(
        <div>
            <Services
                service='Desarrollo web' 
                description='Desarrollamos páginas web para tu negocio, utilizando modernas herramientas con los mejores patrones de desarrollo de software. Dentro de las herramientas que utilizamos puedes encontrar: React, JavaScript, HTML y CCS entre otras.' 
                image='dev'
                alt='imagen relacionada'>
            </Services>
            <Services 
                service='Diseño Grafico' 
                description='Nuestro enfoque está en que tengas una gran experiencia de usuario, por eso nos especializamos en que todo el material gráfico que se use para tu proyecto sea el mejor, que se ajuste a las necesidades de nuestros clientes. Realizamos logos, fotografía de productos, imagen corporativa, renovación de identidad corporativa y todo lo que necesites para que tu negocio sea el mejor.' 
                image='design'
                alt='imagen relacionada'>
                </Services>
                
                <Services
                service='Motion graphics'
                description='¿Te gustaría que tu logo tenga animación? ¡Nosotros tenemos la solución! Amamos ponerles vida a tus ideas. Realizamos piezas gráficas animadas, todo con la mejor tecnología y la mayor calidad.'
                image='animation'
                alt='imagen relacionada'></Services>        
        </div>
        
        
    );
}

export default ServicesPage;