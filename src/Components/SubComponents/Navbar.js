import React from 'react'
import "../../css/navbar.css"
import logo from "../../images/logo.png"

export default function Navbar() {
    return (
        <div className="wrapper">
            <nav className='navbar'>
                <img src={logo} id="logo" alt="Logo" />

                <ul className='nav-list'>
                    <li className='nav-item'>Anasayfa</li>
                    <li className='nav-item'>Hakkımızda</li>
                    <li className='nav-item'>Hizmetlerimiz</li>
                    <li className='nav-item'>İletişim</li>
                    <li className='nav-item' id='randevu'>Randevu Al</li>
                </ul>
            </nav>
        </div>
    )
}
