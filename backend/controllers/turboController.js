const express = require("express");
const turbo = express.Router();

const { getAllTurbos } = require("../queries/turboQueries")

//Index of all Carreras

turbo.get("/", async (request, response) => {
    const allTurboModels = await getAllTurbos();
    if (allTurboModels[0]) {
        response.status(200).json(allTurboModels)
    } else {
    response.status(500).json({ error: "server error!!"})
    }
});

module.exports = turbo;