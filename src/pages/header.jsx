import './styles.css'
import logo from'../assets/logo.jpeg'
function Header() {
    
  
    return (
      <header className="main-header">
        <img src={logo} alt="" />
        <ul className='header__list'>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
      </header>
    )
  }
  
  export  {Header}