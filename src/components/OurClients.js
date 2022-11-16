import client1 from "../assets/client-1.png"
import client2 from "../assets/client-2.png"
import styles from "../styles/ourclients.css"
function OurClients(){
    return(
        <div className="OurClients">
        <h2>Our Clients</h2>
        <img src={client1} alt="Welcome" width="500" height="600"/>   
        <img src={client2} alt="Welcome" width="500" height="600"/>
        </div>
    )
}

export default OurClients