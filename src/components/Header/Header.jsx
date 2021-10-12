import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.css'
import Logo from './../../images/logo.png'

export const Header = () => {
    return (
        <header className={Styles.header}>
            <div className="container">
                <NavLink to ="/">
                    <img src={Logo} alt="logo" />
                </NavLink> 
            </div>
        </header>
    )
}
