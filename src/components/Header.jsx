import '../styles/header.css'
import logo from'../assets/logo.jpeg'
import NavBar from './NavBar'
import React,{useState} from 'react'
import { Close, MenuOutlined } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import HamburgerMenu from './HamburguerMenu'


function Header() {
    
    const [active,setActive] = useState(false)

    const showMenu = () =>{
      setActive(true)
    }

    return (
      <header className="main-header">
          <h1><img src={logo} alt="Logo Horus web" /></h1>
            <ul>
              <div className='closed'>
                <Close className='close' onClick= {showMenu}/>
              </div>
            </ul>
      </header>
        
    )
  }
  
  export  default Header;