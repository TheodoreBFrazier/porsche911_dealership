import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"


function NavBar() {
    return (
        <nav className="navigation">

            <ul className="navigation-links">
                <li>
                    <div className="home-link-logo">
                        <Link to="/">
                            <img
                                src={logoMenu}
                                alt="python green"
                            />
                        </Link>
                    </div>
                </li>



                <li>
                    <Link to="/carrera" style={{ textDecoration: 'none' }}>
                        <h3>
                            The New Carrera.
                        </h3>
                    </Link>
                </li>
                <li>
                    <h3>
                        <Link to="/turbo" style={{ textDecoration: 'none' }}>
                            Carrera Turbo
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/gt3" style={{ textDecoration: 'none' }}>
                            GT3
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/generations" style={{ textDecoration: 'none' }}>
                            generations
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/porschestore" style={{ textDecoration: 'none' }}>
                            Shop
                        </Link>
                    </h3>
                </li>
            </ul>
        </nav >
    )
}

export default NavBar;