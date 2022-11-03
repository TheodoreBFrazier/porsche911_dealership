import React from "react";
import { DropdownMenuItems } from "./DropdownMenuItems";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";

export default function DropDown({
    toggleMenuOpen,
    toggleDropDownMenuOpen,
    handleClick,
    click
}) {
    return (
        <ul onClick={handleClick} className={click ? "dropdownOpen" : "dropdownClose"}>
            {DropdownMenuItems.map((menuitem, index) => {
                return (
                    <li key={index}>
                        <Link
                            className={menuitem.name}
                            to={menuitem.path}
                            onClick={() => {
                                toggleMenuOpen();
                                toggleDropDownMenuOpen();
                            }}
                        >
                            {menuitem.title}
                        </Link>
                    </li>
                );
            })};
        </ ul>
    );
};