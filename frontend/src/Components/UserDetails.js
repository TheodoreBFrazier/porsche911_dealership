import React from "react"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const API = process.env.REACT_APP_API_URL;

function UserDetails() {
    const [user, setUser] = useState({});
    //Will link to users saved Porsches 
    const [open, setOpen] = useState({})
    let { user_id } = useParams(false)

    useEffect(() => {
        axios.get(API + "/users/" + user_id)
            .then((response) => {
                setUser(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [user_id])

    //Handle state of the ErrorMessage
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    return (
        <div className="test-details">
            <h1>THIS IS A TEST</h1>

            <ErrorMessage
                severity="success"
                message={"Success!"}
                handleClose={handleClose}
                open={open}
            />

            {user.first_name}
            {user.last_name}
        </div>
    );
};

export default UserDetails