import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//Access the API
const API = process.env.REACT_APP_API_URL;

function UserDetails() {
    const [user, setUser] = useState({})
    //User's favorite cars from PorschesForSale
    const [userFavorites, setUserFavorites] = useState([]);

    const [open, setOpen] = useState(false);
    let { user_id } = useParams();
let navigate = useNavigate();

    const usersPorsche = JSON.parse(localStorage.getItem("userPorsche"));

    //remove usersFavorite Porsche

    const removeFavoritePorsche = (user_id) => {
        axios.delete(`${API}/users/${user_id}/${favoriteid}`)
        .then((response) => {
            const updatedFavorites = userFavorites.filter(
                (element) => element.porsche_id !== user_id
            );
            setUserFavorites(updatedFavorites);
            setOpen(true)
        })
        .catch((element) => console.log(element))
    };

}