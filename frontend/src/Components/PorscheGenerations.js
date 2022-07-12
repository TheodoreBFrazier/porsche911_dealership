import axios from "axios";
import {  useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;


exxport default function Generations () {
const [ generations, setGenerations ] = useState([]);

useEffect(() => {
    axios.get(`${API}/generations`).then(() => {
        console.log(response)
        console.log(response.data)
    })}, []);

}
