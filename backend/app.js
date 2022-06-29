// Installation of Dependencies //

//CORS
const cors = require("cors");
//EXPRESS
const express = require("express");


//Controllers will go here 

const carreraController = require("./controllers/carreraController.js");
const turboController = require("./controllers/turboController.js");
const gt3Controller = require("./controllers/gt3Controller.js")

//Configure & evoking APP to express
const app = express();

//Applicaton of Middleware
app.use(cors());

//Parse incoming JSON
app.use(express.json());

//Porsche Model ROUTES

// Base Carrera Model
app.use("/carrera", carreraController);

app.use("/turbo", turboController);

// Turbo Model
app.use("/gt3", gt3Controller);

// GT3 Model

require("dotenv").config(); //Loads Environmental Variables 

// Home
app.get("/", (request, response) => {
    response.send("Welcome to the Porsche 911 Exclusive Dealership");
})


app.get("*", (request, response) => {
    response.status(404).send("Page not found.")
});


//EXPORTING THE APPLICATION
module.exports = app;

