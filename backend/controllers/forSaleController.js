const express = require("express");
const porschestore = express.Router();

const { getAllForSale, singlePorscheForSale, createPorscheForSale, updateCreatedPorsche } = require("../queries/forSaleQueries");

//Get all Porsches for sale


porschestore.get("/", async (request, response) => {
  const allPorschesForSale = await getAllForSale()
  if (allPorschesForSale[0]) {
    response.status(200).json(allPorschesForSale);
    console.log(allPorschesForSale);
  } else {
    response.status(500).json({ error: "server error!! 😳" });
  }
});

//Get on Porsche for sale

porschestore.get("/:id", async (request, response) => {
  const { id } = request.params;
  const porscheForSale = await singlePorscheForSale(id)
  if (porscheForSale.porsche_id) {
    response.json(porscheForSale);
  } else {
    response.status(404).json({ error: "not found" })
  }
});

//Porsche for sale

porschestore.post("/", async (request, response) => {
  const { body } = request
  try {
    const userCreatedPorsche = await createPorscheForSale(body);
    if (userCreatedPorsche.porsche_id) {
      response.status(200).json(userCreatedPorsche)
    } else {
      response.status(500).json({ error: "Posting failed" })
    }
  } catch (error) {
    console.log(error)
  }
});

//Edit a Porsche

porschestore.put('/:id', async (request, response) => {
  const { id } = request.params;
  const updatedPorsche = await updateCreatedPorsche(id, request.body);
  if (updatedPorsche.id) {
    response.status(200).json(updatedPorsche)
  } else {
    response.status(400).json("error")
  }
});

module.exports = porschestore;
