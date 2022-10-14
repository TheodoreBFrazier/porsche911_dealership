import React from "react"
import logo from "../Assets/Images/porsche_logo.png"
import { Link } from "react-router-dom";

function UserPage() {
    return (
        <div className="user-portal">

            <div className="user-portal-container">
                <div className="column">
                    <div className="user-portal-sidebar">
                        <div className="text">
                            <div className="welcome">
                                <h2>Hello!</h2>
                            </div>
                            <div className="profile-label">
                                <p>Email</p>
                            </div>
                            <div className="email">
                                <p>E-mail: theo@gmail.com</p>
                            </div>
                            <div className="profile-label">
                                <p>Email</p>
                            </div>
                            <div className="dob">
                                <p>DOB: 07/22/1988</p>
                            </div>
                            <div className="profile-label">
                                <p>Email</p>
                            </div>
                            <div className="country">
                                <p>COUNTRY: USA </p>
                            </div>
                            <div>
                                EDIT BUTTON WILL GO HERE - RED
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="page">
                        <div className="logo">
                            <img
                                src={logo}
                                alt="the porsche logo"
                            />
                        </div>
                        <div className="portal-information">
                            <div className="user-car">
                                <h2>Your Cars</h2>
                                <p>You don't have a Porsche yet. - Form to add a car</p>

                                <Link to="/sell" style={{ textDecoration: 'none', color: 'white' }} >
                                    Need to Sell?
                                </Link>
                            </div>
                            <hr />
                            <div className="saved-cars">
                                <h2>Saved Cars</h2>
                                <p>Go to the sales page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage