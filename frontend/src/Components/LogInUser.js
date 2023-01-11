import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//Axios
import axios from "axios";


//MUI stuff

import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

const API = process.env.REACT_APP_API_URL;

function LogInUser({ setLogInText }) {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        user_name: "",
        password: "",
    });

    //show error to user
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const logInSuccess = () => {
        setError("")
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
                navigate(`/users/${userId}`);

            })
            .catch((c) => {
                if (c.response && c.response.data) {
                    setError(c.response.data.error);
                    setOpen(true)
                }
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
            <ErrorMessage
                severity="error"
                message={error}
                open={open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "top",
                }}
                handleClose={handleChange}
            />
            <form onSubmit={handleSubmit} className="form">
                <div className="input-container">
                    <h2>Log In</h2>
                    <TextField
                        fullWidth
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
                    <br />
                    <TextField fullWidth
                        placeholder="Password"
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
                    <br />
                    <Button
                        sx={{
                            borderRadius: 50
                        }}
                        variant="outlined"
                        size="medium"
                        type="submit"
                        value="Submit"
                    >
                        Log In
                    </Button>
                </div>
                <div className="sign-up-action">
                    <h3>Not a user? Sign up.</h3>
                    <Link to="/users/create" style={{ textDecoration: 'none', color: 'black' }}>
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LogInUser;