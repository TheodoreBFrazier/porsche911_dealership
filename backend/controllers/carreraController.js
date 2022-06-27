const express = require("express");
const carreras = express.Router();

//Index of all Carreras
carreras.get("/", (request, response) => {
    response.json( { status: "okay"});
});

module.exports = carreras;