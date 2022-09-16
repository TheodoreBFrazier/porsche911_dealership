import React from 'react';
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav className="navigation">
            <h3 className="home-link-logo">
                <Link to="/">
                    Home (logo)
                </Link>
            </h3>


            <ul className="navigation-links">
                <li>
                    <Link to="/carrera">
                        <h3>
                            The New Carrera.
                        </h3>
                    </Link>
                </li>
                <li>
                    <h3>
                        <Link to="/turbo">
                            Carrera Turbo
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/gt3">
                            GT3
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/generations">
                            generations
                        </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/porschestore">
                            Shop
                        </Link>
                    </h3>
                </li>
            </ul>


        </nav>
    )
}

export default NavBar;