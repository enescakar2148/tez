import React from 'react'
import "../../css/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar bg-success">
            <nav>

                <h1 id="logo">Logo</h1>

                <input
                    type="text"
                    id="searchbar"
                    className="input-navbar"
                    placeholder="Ne Aramıştınız ?" />

                <ul className="nav-list">
                    <li className="item">Anasayfa</li>
                    <li className="item">Eğitimler</li>
                    <li className="item">Randevu Al</li>
                    <li className="item">Blog</li>
                </ul>
            </nav>
        </div>
    )
}
