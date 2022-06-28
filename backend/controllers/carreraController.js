const express = require("express");
const carrera = express.Router();

//Require queries
const { getAllCarreras } = require("../queries/carerraQueries");

//Index of all Carreras  - SUCCESS!
carrera.get("/", async (request, response) => {
    const allCarreraModels = await getAllCarreras();
    if (allCarreraModels[0]) {
        response.status(200).json(allCarreraModels)
    } else {
    response.status(500).json({ error: "server error!!"})
    }
});

module.exports = carrera;