import React from 'react';
import { Link } from "react-router-dom";
import homeIcon from "../Assets/Images/porsche_logo.png"


const Icon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
};


function NavBar() {

    return (
        <div className='navigation'>
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
                        <strong>01</strong> &nbsp; HISTORY
                    </Link>
                </li>
                <li>
                    <Link to="/porschestore" style={{ textDecoration: 'none', color: 'black' }}>
                        <strong>02</strong> &nbsp; SHOP
                    </Link>
                </li>
                <li>
                    <Link to="/porschestore" style={{ textDecoration: 'none', color: 'black' }}>
                        <strong>03</strong> &nbsp; THE NEW 911
                    </Link>
                    <Icon />
                </li>
                <li>
                    <Link to="/users/login" style={{ textDecoration: 'none', color: 'black' }}>
                        Login   
                    </Link>
                  
                </li>
            </ul>
        </div>
    );
};

export default NavBar;