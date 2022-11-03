import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import homeIcon from "../Assets/Images/porsche_logo.png"


function NavBar() {

    return (
        <nav className='navigation'>
            <ul className="nav-links" >
                <li className='home-link-icon'>
                    <Link to="/">
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
                        Login
                    </Link>
                </li>

            </ul >
        </nav>
    );
};

export default NavBar;