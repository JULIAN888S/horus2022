import style from "../styles/contactus.css"
function ContactUs (){
    return(
    <div className="main-contactus">  
        <form className="form">
            <h2>CONTACT US</h2>
            <p type="Name:"><input placeholder="Write your name here.."></input></p>
            <p type="Email:"><input placeholder="Email"></input></p>
            <p type="Message:"><input placeholder="Phone Number"></input><button>Send Message</button>
</p>

            <div>
            </div>
        </form>
    </div>      
    )
}

export default ContactUs