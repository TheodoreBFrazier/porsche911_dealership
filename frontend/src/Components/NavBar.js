import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"
import sellIcon from "../Assets/Images/porsche-sell-icon.png"



function NavBar() {
    return (
        <nav className="navigation">

            <Link to="/">
                Home
            </Link>

            <ul className="nav-links">
                <li>
                    <Link to="/carrera" style={{ textDecoration: 'none' }}>
                        Carrera
                    </Link>
                </li>
                <li>
                    <Link to="/turbo" style={{ textDecoration: 'none' }}>
                        Turbo
                    </Link>
                </li>
                <li>
                    <Link to="/gt3" style={{ textDecoration: 'none' }}>
                        911 GT3
                    </Link>
                </li>
                <li>
                    <Link to="/generations" style={{ textDecoration: 'none' }}>
                        generations
                    </Link>
                </li>
            </ul>

            <Link to="/porschestore" style={{ textDecoration: 'none' }}>
                Shop
            </Link>
        </nav >
    )
}

export default NavBar;