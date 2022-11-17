import React from "react"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SellPorscheForm from "./SellPorscheForm";

const API = process.env.REACT_APP_API_URL;

function UserDetails() {
    const [user, setUser] = useState({});
    //Will link to users saved Porsches 
    let { user_id } = useParams()

    useEffect(() => {
        axios.get(API + "/users/" + user_id)
            .then((response) => {
                setUser(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [user_id])



    return (
        <div className="test-details">
            {user.first_name}
            {user.last_name}
            <SellPorscheForm/>
        </div>
    );
};

export default UserDetails