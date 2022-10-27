import React from "react";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

import carreraPhoto from "../Assets/Images/carrera.png"
import turboPhoto from "../Assets/Images/turbo.png"
import gt3Photo from "../Assets/Images/gt3.png"

export default function NewCarreraBanner() {
    return (
        <div className="banner">
            <Collapsible className="collaspibleTrigger" trigger="The new 911" style={{ textDecoration: 'none', marginTop: '10px' }}>
                <nav className="sub-navigation">

                    <ul className="sub-nav-links">
                        <li>
                            <img
                                src={carreraPhoto}
                                alt="carrera-image"
                            />
                            <Link to="/carrera" className={"sub-link-styles"}>
                                Carrera
                            </Link>
                        </li>
                        <li>
                            <img
                                src={turboPhoto}
                                alt="turbo-image"
                            />
                            <Link to="/turbo" className={"sub-link-styles"}>

                                Turbo
                            </Link>
                        </li>
                        <li>
                            <img
                                src={gt3Photo}
                                alt="turbo-image"
                            />
                            <Link to="/gt3" className={"sub-link-styles"}>
                                GT3
                            </Link>
                        </li>
                    </ul>
                </nav >
            </Collapsible >
        </div>
    );
}