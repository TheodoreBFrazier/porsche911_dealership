import React from 'react';
import { Link } from "react-router-dom";
import userProfile from "../Assets/Images/user-page.png"



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
                    <Link to="/generations" style={{ textDecoration: 'none', color: 'white' }}>
                        911 History
                    </Link>
                </li>
                <li>
                    <Link to="/porschestore" style={{ textDecoration: 'none', color: 'white' }}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/user" style={{ textDecoration: 'none', color: 'white' }}>
                        Sign In 
                    </Link>
                </li>
            </ul >
        </nav >
    )
}

export default NavBar;