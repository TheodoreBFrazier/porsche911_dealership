// Installation of Dependencies //

//CORS
const cors = require("cors");
//EXPRESS
const express = require("express");


//Controllers will go here 

const carreraController = require("./controllers/carreraController.js");
const turboController = require("./controllers/turboController.js");
const gt3Controller = require("./controllers/gt3Controller.js")
const generationController = require("./controllers/generationController")
const forSaleController = require("./controllers/forSaleController")
 
//Configure & evoking APP to express
const app = express();

//Applicaton of Middleware
app.use(cors());

//Parse incoming JSON
app.use(express.json());

//Porsche Model ROUTES

// Base Carrera Model
app.use("/carrera", carreraController);


// Turbo Model

app.use("/turbo", turboController);

// GT3 Model

app.use("/gt3", gt3Controller);

// generations

app.use("/generations",  generationController);

// For Sale 

app.use("/porschestore", forSaleController)



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

