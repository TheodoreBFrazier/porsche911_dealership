const express = require("express");
const turbo = express.Router();

const { getAllTurbos,
    getTurboModel
} = require("../queries/turboQueries")

//Index of all Carreras

turbo.get("/", async (request, response) => {
    const allTurboModels = await getAllTurbos();
    if (allTurboModels[0]) {
        response.status(200).json(allTurboModels)
    } else {
    response.status(500).json({ error: "server error!!"})
    }
});

turbo.get("/:id", async (request, response) => {
    const { id } = request.params;
    // Query Name
    const turbomodel = await getTurboModel(id);
    if ( turbomodel.turbo_id ) {
        response.json(turbomodel)
    } else {
        response.status(404).json({ error: "not found"})
    }
 });

module.exports = turbo;