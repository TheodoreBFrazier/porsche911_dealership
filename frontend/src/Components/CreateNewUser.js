import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

export default function CreateNewUser() {
    let navigate = useNavigate();
    const [user, setNewUser] = useState({
        first_name: "",
        last_name: "",
        age: null,
        email: "",
        user_name: "",
        password: "",
    });

    const addUser = () => {
        axios.post(`${API}/authorization/sign_up`, user)
            .then(() => {
                navigate(`/users/login`);
            })
    };

    const handleTextChange = (event) => {
        setNewUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser();
        console.log(addUser)
    };


    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
            <div className="input-container">
                    <h2>Login Here</h2>
                <TextField fullWidth
                    id="first_name"
                    className="input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleTextChange}
                    value={user.first_name}
                    variant="standard"
                    margin="dense"
                />
                <br />
                <TextField fullWidth
                    id="last_name"
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleTextChange}
                    value={user.last_name}
                    variant="standard"
                    margin="dense"
                />
                <br />
                <TextField fullWidth
                    id="age"
                    className="input"
                    type="number"
                    placeholder="Age"
                    min="0"
                    max="99"
                    onChange={handleTextChange}
                    value={user.age}
                    variant="standard"
                    margin="dense"
                />
                <TextField fullWidth
                    id="email"
                    className="input"
                    type="text"
                    placeholder="Email"
                    onChange={handleTextChange}
                    value={user.email}
                    variant="standard"
                    margin="dense"
                />
                <br />
                <TextField fullWidth
                    id="user_name"
                    className="input"
                    type="text"
                    placeholder="User Name"
                    onChange={handleTextChange}
                    value={user.user_name}
                    variant="standard"
                    margin="dense"
                    range="0-100"
                />
                <br />
                <TextField fullWidth
                    id="password"
                    className="input"
                    type="text"
                    placeholder="Password"
                    onChange={handleTextChange}
                    value={user.password}
                    variant="standard"
                    margin="dense"
                />
                <br /> 
                <button type="text" className="submit">
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
};