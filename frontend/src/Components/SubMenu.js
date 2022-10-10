import React from 'react';
import { Link } from "react-router-dom"

import carreraPhoto from "../Assets/Images/carrera.png"
import turboPhoto from "../Assets/Images/turbo.png"
import gt3Photo from "../Assets/Images/gt3.png"


function SubBar() {
    return (
        <nav className="sub-navigation">


            <ul className="sub-nav-links">


                <li>

                    <Link to="/carrera" style={{ textDecoration: 'none' }}>
                        <img
                            src={carreraPhoto}
                            alt="carrera-image"
                        />
                      Carrera
                    </Link>
                </li>
                <li>


                    <Link to="/turbo" style={{ textDecoration: 'none' }}>
                        <img
                            src={turboPhoto}
                            alt="turbo-image"
                        />
                   Turbo
                    </Link>
                </li>
                <li>
                    <Link to="/gt3" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img
                            src={gt3Photo}
                            alt="turbo-image"
                        />
                 911 GT3
                    </Link>

                </li>
            </ul>

        </nav >
    )
}

export default SubBar;