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

//Show one porsche model 
 carrera.get("/:id", async (request, response) => {
    const { id } = request.params;
    const carreramodel await getPorscheModel(id);
    if ( carreramodel ) {
        response.json(carreramodel)
    } else {
        response.status(404).json({ error: "not found"})
    }
 });

module.exports = carrera;