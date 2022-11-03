import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function CreateUserProfile() {
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
        <div>
            Sign up!
            <form onSubmit={handleSubmit}>
                <input
                    id="first_name"
                    className="input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleTextChange}
                    value={user.first_name}                
                />
                <input
                    id="last_name"
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleTextChange}
                    value={user.last_name}
                />
                <input
                    id="age"
                    className="input"
                    type="number"
                    placeholder="Age"
                    min="0"
                    max="99"
                    onChange={handleTextChange}
                    value={user.age}
                />
                <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder="Email"
                    onChange={handleTextChange}
                    value={user.email}
                />
                <input
                    id="user_name"
                    className="input"
                    type="text"
                    placeholder="User Name"
                    onChange={handleTextChange}
                    value={user.user_name}
                />
                <input
                    id="password"
                    className="input"
                    type="text"
                    placeholder="Password"
                    onChange={handleTextChange}
                    value={user.password}
                />
                <button type="text" className="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};