import React from 'react';
import { Link } from "react-router-dom";
import userProfile from "../Assets/Images/user-page.png"

import homeIcon from "../Assets/Images/porsche_logo.png"



function NavBar() {
    return (
        <nav className="navigation">

            <ul className="nav-links" >
                <li className='home-link-icon'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={homeIcon}
                            alt="Porsche logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/generations" style={{ textDecoration: 'none', color: 'black' }}>
                        911 History
                    </Link>
                </li>
                <li>
                    <Link to="/porschestore" style={{ textDecoration: 'none', color: 'black' }}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/users/login" style={{ textDecoration: 'none', color: 'black' }}>
                        Sign In
                    </Link>
                </li>
            </ul >
        </nav >
    );
};

export default NavBar;