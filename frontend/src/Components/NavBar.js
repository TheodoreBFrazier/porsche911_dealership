import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"
import sellIcon from "../Assets/Images/porsche-sell-icon.png"

import Dropdown from "react-bootstrap/Dropdown"


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


                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Link to="/carrera" style={{ textDecoration: 'none' }}>
                        <h5>
                            The New Carrera
                        </h5>
                    </Link>


                    <Link to="/turbo" style={{ textDecoration: 'none' }}>
                        <h5>
                            Carrera Turbo
                        </h5>
                    </Link>


                    <Link to="/gt3" style={{ textDecoration: 'none' }}>
                        <h5>
                            GT3
                        </h5>
                    </Link>
                    </Dropdown.Menu>


                </Dropdown>

                <Link to="/generations" style={{ textDecoration: 'none' }}>
                    <h5>
                        generations
                    </h5>
                </Link>



                <li>
                    <div className='sell-icon'>
                        <Link to="/porschestore" style={{ textDecoration: 'none' }}>
                            <img src={sellIcon}
                                alt="png for sell"
                            />
                            <h5>
                                Shop
                            </h5>
                        </Link>
                    </div>
                </li>

            </ul>


        </nav >
    )
}

export default NavBar;