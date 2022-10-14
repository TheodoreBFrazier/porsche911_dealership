const express = require("express");
const turbo = express.Router();

const { getAllTurbos,
    getTurboModel,
    turboModelTechInfo
} = require("../queries/turboQueries")

//Index of all Turbos

turbo.get("/", async (request, response) => {
    const allTurboModels = await getAllTurbos();
    if (allTurboModels[0]) {
        response.status(200).json(allTurboModels)
    } else {
        response.status(500).json({ error: "server error!!" })
    }
});

//One Turbos

turbo.get("/:id", async (request, response) => {
    const { id } = request.params;
    // Query Name
    const turbomodel = await getTurboModel(id);
    if (turbomodel.turbo_id) {
        response.json(turbomodel)
    } else {
        response.status(404).json({ error: "not found" })
    }
});

//Turbo

turbo.get("/:id/technical", async (request, response) => {
    const { id } = request.params;
    try {
        const turboTechStats = await turboModelTechInfo(id);
        if (turbo.turbo_id) {
            response.status(200).json(turboTechStats);
        } else {
            response.status(404).json({ error: "server error" })
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = turbo;