const express = require("express");
const porschestore = express.Router();

const { getAllForSale } = require("../queries/forSaleQueries");

porschestore.get("/", async (request, response) => {
  const allPorschesForSale = await getAllForSale();
  if (allPorschesForSale[0]) {
    response.status(200).json(allPorschesForSale);
    console.log(allPorschesForSale);
  } else {
    response.status(500).json({ error: "server error!!" });
  }
});

module.exports = porschestore;
