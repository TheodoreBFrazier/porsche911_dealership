const express = require("express");
const gt3 = express.Router();

//Require queries
const { 
    getAllGt3s,
    getGt3Model
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

//View of one model

gt3.get("/:id", async (request, response) => {
    const { id } = request.params;
    // Query Name
    const gt3model = await getGt3Model(id);
    if ( gt3model.gt3_id ) {
        response.json(gt3model)
    } else {
        response.status(404).json({ error: "not found"})
    }
 });

module.exports = gt3;