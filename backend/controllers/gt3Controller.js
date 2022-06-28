const express = require("express");
const gt3 = express.Router();

//Index of all Carreras
gt3.get("/", (request, response) => {
    response.json( { status: "okay"});
});

gt3.get("/", async (request, response) => {
    const allCarreraModels = await getAllCarreras();
    if (allCarreraModels[0]) {
        response.status(200).json(allCarreraModels)
    } else {
    response.status(500).json({ error: "server error!!"})
    }
});

module.exports = gt3;