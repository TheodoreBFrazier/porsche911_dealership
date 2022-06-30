const express = require("express")
const generations = express.Router();

// require inquiry 
const {
    getAllGenerations
} = require("../queries/generationsQueries.js")

generations.get("/", async (request, response) => {
    const allGenerations = await getAllGenerations();
    if (allGenerations[0]) {
        response.status(200).json(allGenerations)
    } else {
        response.status(500).json({ error: "server error!" })
    }
})

module.exports = generations;
