import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"
import sellIcon from "../Assets/Images/porsche-sell-icon.png"



function NavBar() {
    return (
        <nav className="navigation">


            <ul className="navigation-links">

                <li>
                    <div className="home-link-logo">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                </li>




                

                    <li>
                        <Link href="/carrera" style={{ textDecoration: 'none' }}>
                            911 Carrera
                        </Link>
                    </li>

                    <li>
                        <Link to="/turbo" style={{ textDecoration: 'none' }}>
                            Turbo
                        </Link>
                    </li>
                    <li>
                        <Link to="/gt3" style={{ textDecoration: 'none' }}>
                            911 GT3
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
                        <div className='sell-icon'>
                            <Link to="/porschestore" style={{ textDecoration: 'none' }}>
  
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