import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import homeIcon from "../Assets/Images/porsche_logo.png"
import DropDown from './Dropdown.js';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NavBar({
    LogTextStatus,
    SetLogTextStatus,
    toggleMenuOpen,
    toggleDropDownMenuOpen,
    click,
    handleClick,
    open,
    setOpen,
    dropdown,
    onMouseClick,
    onMouseUnclick,
}) {

    //Clear the local storage and update state of the logIn button inner HTML
    const logOut = () => {
        localStorage.clear();
        SetLogTextStatus("Log In");
    }

    const userId = localStorage.getItem("userId");
    const userData = JSON.parse(localStorage.getItem("userInfo"))


    return (
        <ul open={open} className="nav-links" >
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

            <li
                onClick={dropdown ? onMouseUnclick : onMouseClick}
            >
                <Link to="/porschestore" style={{ textDecoration: 'none', color: 'black' }}>
                    Shop <ArrowDropDownIcon frontSize="small"></ArrowDropDownIcon>
                </Link>
                {dropdown && (
                    <DropDown
                        handleClick={handleClick}
                        click={click}
                        open={open}
                        toggleMenuOpen={toggleMenuOpen}
                        toggleDropDownMenuOpen={toggleDropDownMenuOpen}
                        setOpen={setOpen}
                    />
                )}
            </li>




            <li
                onClick={() => {
                    toggleMenuOpen()
                    toggleDropDownMenuOpen()
                }}
            >

                {localStorage.getItem("userId") ? (
                    <Link to="/users/login" onClick={logOut} style={{ textDecoration: 'none', color: 'black' }}>
                        {LogTextStatus}
                    </Link>
                ) : (
                    <Link to="/users/login" style={{ textDecoration: 'none', color: 'black' }}>
                        {LogTextStatus}
                    </Link>
                )}
            </li>
        </ul >

    );
};

export default NavBar;