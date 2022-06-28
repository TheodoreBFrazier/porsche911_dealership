const express = require("express");
const gt3s = express.Router();

//Index of all Carreras
gt3s.get("/", (request, response) => {
    response.json( { status: "okay"});
});

module.exports = gt3s;