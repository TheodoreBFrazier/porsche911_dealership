import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Axios
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogInUser({}) {
    let navigate = useNavigate();
    
    const [user, setUser] = useState({
        user_name: "",
        password: "",
    });

    //Show error message if applicable 
    const [error, setError] = useState("");
    //
    const [open, setOpen] = useState(false);

    const logInSuccess = () => {
        setError("");
        
    }

}