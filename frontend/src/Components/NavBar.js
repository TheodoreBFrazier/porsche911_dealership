import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"


function NavBar() {
    return (
        <nav className="navigation">




            <div className="home-link-logo">
                <Link to="/">
                    <img
                        src={logoMenu}
                        alt="python green"
                    />
                </Link>
            </div>



            <ul className="navigation-links">
                <li>
                    <Link to="/carrera" style={{ textDecoration: 'none' }}>
                        <h5>
                            The New Carrera
                        </h5>
                    </Link>
                </li>
                <li>

                    <Link to="/turbo" style={{ textDecoration: 'none' }}>
                        <h5>
                            Carrera Turbo
                        </h5>
                    </Link>

                </li>
                <li>

                    <Link to="/gt3" style={{ textDecoration: 'none' }}>
                        <h5>
                            GT3
                        </h5>
                    </Link>

                </li>
                <li>
                    <Link to="/generations" style={{ textDecoration: 'none' }}>
                        <h5>
                            generations
                        </h5>
                    </Link>
                </li>
                <li>

                    <Link to="/porschestore" style={{ textDecoration: 'none' }}>
                        <h5>
                            Shop
                        </h5>
                    </Link>

                </li>

            </ul>
        </nav >
    )
}

export default NavBar;