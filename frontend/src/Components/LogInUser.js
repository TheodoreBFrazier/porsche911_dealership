import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Axios
import axios from "axios";


//MUI stuff

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";


const API = process.env.REACT_APP_API_URL;

function LogInUser({ setLogInText }) {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        user_name: "",
        password: "",
    });


    const logInSuccess = () => {
        axios
            .post(`${API}/authorization/login`, user)
            .then((response) => {
                const userInfo = response.data.result;
                const userId = userInfo.user_id;
                if (!(userId)) {          
                    //Manage LOCAL storage
                    localStorage.setItem("userId", `${userId}`);
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));
                }
                //Change state of logIn Button
                setLogInText("Log out!")
                navigate(`/users/${userId}`);
            })

    };


    const handleChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        logInSuccess();
    };


    return (
        <div className="login-form">
            <form onSubmit={handleSubmit} className="form">
                <div className="input-container">
                    <h2>Login Here</h2>

                    <TextField
                        fullWidth
                        label="UserName"
                        placeholder="Username"
                        type="text"
                        id="user_name"
                        onChange={handleChange}
                        value={user.user_name}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        margin="dense"
                    />
                    <br />
                    <TextField fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={user.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        margin="dense"
                    />
                    <br />
                    <Button
                        type="submit"
                        value="Submit"
                    >
                        Log In
                    </Button>
                </div>
                <div className="sign-up-action">
                    <h3>Not a user? Sign up.</h3>
                </div>
            </form>
        </div>
    );
};

export default LogInUser;