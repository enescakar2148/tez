import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/navbar.css"
import logo from "../../images/logo.png"

export default function Navbar() {
    return (
        <div className="wrapper">
            <nav className='navbar'>
                <img src={logo} id="logo" alt="Logo" />

                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/tez">Anasayfa</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about-us">Hakkımızda</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services">Hizmetlerimiz</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact">İletişim</Link>
                    </li>
                    <li className='nav-item' id='randevu'>
                        <Link to="/randevu-al" id='randevu-link-text'>Randevu Al</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
