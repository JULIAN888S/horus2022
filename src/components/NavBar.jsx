
import React, { useState } from 'react'
import styles from '../styles/navbar.css'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Close, MenuOutlined }  from '@mui/icons-material'
  const Navbar = () => {

    const [active, setActive] = useState(false)
    const showMenu =() =>{
      setActive(true)
    }
  return (

        <div className='navbar'>
              <ul>    
                <li>
                    <NavLink to ='/'>Home</NavLink>
                </li>
                
                <li>
                    <NavLink
                    to ='/ServicesPage'>Services </NavLink>
                </li>

                <li>
                    <NavLink
                    to ='/ContactUs'>Contact us </NavLink>
                </li>
                <li>
                    <NavLink
                    to ='/AboutUs'>About </NavLink>
                </li>
            </ul>
        </div>  

  )
}

export default Navbar

