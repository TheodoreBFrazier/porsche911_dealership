const db = require("../db/dbConfig.js");

const getAllForSale = async () => {
  try {
    const allForSalePorsches = await db.any("SELECT * FROM porsches_4_sale");
    console.log(allForSalePorsches)
    return allForSalePorsches;
  } catch (error) {
    return error
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

const createPorscheForSale = async (porsche) => {
  try {
    const postedPorsche = await db.one(
      "INSERT INTO porsches_4_sale (model_name, year, body_style, price, generation, color, transmission, description, main_image,  second_image, third_image, fourth_image, fifth_image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [porsche.model_name, porsche.year, porsche.body_style, porsche.price, porsche.generation, porsche.color, porsche.transmission, porsche.description, porsche.main_image, porsche.second_image, porsche.third_image, porsche.fourth_image, porsche.fifth_image]
    );
    return postedPorsche;
  } catch (error) {
    return error;
  }
};

const updateCreatedPorsche = async (id, porsche) => {
  try {
    const updatedPorsche = await db.one(
      "UPDATE porsches_4_sale SET model_name=$1, year=$2, body_style=$3, price=$4, generation=$5, color=$6, transmission=$7, discription=$8, main_image=$9, second_image=$10, third_image=$11, fourth_image=$12, fifth_image=$13 RETURNING *",
      [porsche.model_name, year, body_style, price, generation, color, transmission, description, main_image, second_image, third_image, fourth_image, fifth_image, id]
    );
    return updatedPorsche;
  } catch (error) {
    return error;
  }
}

const savedPorsche = async (user_id, favoritePorsche) => {
  try {
    if (user_id && (favoritePorsche)) {
      const user_saved_porsche = await db.one(
        "INSERT INTO users_porsche(user_id, porsche_id) VALUES($1, $2) RETURNING *",
        [user_id, porsche_id]
      );
      return user_saved_porsche;
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getAllForSale, singlePorscheForSale, createPorscheForSale, updateCreatedPorsche, savedPorsche };
