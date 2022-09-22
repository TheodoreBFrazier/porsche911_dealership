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
                        The New 911 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/carrera" style={{ textDecoration: 'none' }}>

                            911 Carrera

                        </Dropdown.Item>


                        <Dropdown.Item href="/turbo" style={{ textDecoration: 'none' }}>
                         
                            911 Turbo
                           
                        </Dropdown.Item>


                        <Dropdown.Item href="/gt3" style={{ textDecoration: 'none' }}>
                          
                               911 GT3
                            
                        </Dropdown.Item>
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