const db = require("../db/dbConfig.js");

const getAllForSale = async () => {
  try {
    const allForSalePorsches = await db.any("SELECT * FROM porsches_4_sale");
    return allForSalePorsches;
  } catch (error) {
    console.log(error);
  }
};

const singlePorscheForSale = async (id) => {
  try {
    const singlePorsche = await db.one(
      "SELECT * FROM porsches_4_sale WHERE porsche_id=$1",
      id
    );
    return singlePorsche;
  } catch (error) {
    return error
  }
};

module.exports = { getAllForSale, singlePorscheForSale };
