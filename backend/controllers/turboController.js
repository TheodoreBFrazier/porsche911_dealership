const express = require("express");
const turbos = express.Router();

//Index of all Carreras
turbos.get("/", (request, response) => {
    response.json( { status: "okay"});
});

module.exports = turbos;