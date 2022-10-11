import React from 'react';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

import logoMenu from "../Assets/Images/porsche_logo.png"
import sellIcon from "../Assets/Images/porsche-sell-icon.png"

import SubBar from './SubMenu';



function NavBar() {
    return (
        <nav className="navigation">

            <ul className="nav-links" >
                <li>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Link>
                </li>
                <li>
                <Collapsible className="collaspibleTrigger" trigger="The New 911" style={{ textDecoration: 'none', color: 'white' }}>

<SubBar />
                    </Collapsible>
                </li>

                <li>
                    <Link to="/generations" style={{ textDecoration: 'none', color: 'white' }}>
                        generations
                    </Link>
                </li>

                <li>
                    <Link to="/porschestore" style={{ textDecoration: 'none', color: 'white' }}>
                        Shop
                    </Link>
                </li>
            </ul >
        </nav >
    )
}

export default NavBar;