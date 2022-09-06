const e = require("express");
const express = require("express");
const porschestore = express.Router();

const { getAllForSale, singlePorscheForSale} = require("../queries/forSaleQueries");

porschestore.get("/", async (request, response) => {
  const allPorschesForSale = await getAllForSale();
  if (allPorschesForSale[0]) {
    response.status(200).json(allPorschesForSale);
    console.log(allPorschesForSale);
  } else {
    response.status(500).json({ error: "server error!!" });
  }
});

porschestore.get("/:id", async (request, response) => {
    const { id } = request.params;
    const porscheForSale = await singlePorscheForSale(id)
    if (porscheForSale.porsche_id) {
        response.json(porscheForSale);
    } else {
        response.status(404).json({ error: "not found"})
    }
})

module.exports = porschestore;
