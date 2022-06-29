const express = require("express");
const gt3 = express.Router();

//Require queries
const { 
    getAllGt3s
} = require("../queries/gt3Queries");

//Index of all Carreras

gt3.get("/", async (request, response) => {
    const allGt3Models = await getAllGt3s();
    if (allGt3Models[0]) {
        response.status(200).json(allGt3Models)
    } else {
    response.status(500).json({ error: "server error!!"})
    }
});

module.exports = gt3;