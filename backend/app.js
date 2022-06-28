// Installation of Dependencies //

//CORS
const cors = require("cors");
//EXPRESS
const express = require("express");


//Controllers will go here 

const carreraController = require("./controllers/carreraController.js");

//Configure & evoking APP to express
const app = express();

//Applicaton of Middleware
app.use(cors());

//Parse incoming JSON
app.use(express.json());

require("dotenv").config(); //Loads Environmental Variables 

app.get("/", (request, response) => {
    response.send("Welcome to the Porsche 911 Exclusive Dealership");
})

//Porsche Model ROUTES

// Base Carrera Model
app.use("/carrera", carreraController);

// Turbo Model


// GT3 Model

app.get("*", (request, response) => {
    response.status(404).send("Page not found.")
});


//EXPORTING THE APPLICATION
module.exports = app;

