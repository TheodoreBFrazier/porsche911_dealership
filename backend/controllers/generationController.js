const express = require("express");
const generations = express.Router();

// require inquiry 
const {
    getAllGenerations,
    showOneGeneration
} = require("../queries/generationsQueries.js")

generations.get("/", async (request, response) => {
    const allGenerations = await getAllGenerations();
    if (allGenerations[0]) {
        response.status(200).json(allGenerations)
    } else {
        response.status(500).json({ error: "server error!" })
    }
})

generations.get("/:id", async (request, response) => {
    const { id } = request.params;
    const generation = await showOneGeneration(id)
    if (generation.gen_id) {
        
        response.json(generation)
    } else {
        response.status(404).json({ error: "not found"})
    }
})

module.exports = generations;
