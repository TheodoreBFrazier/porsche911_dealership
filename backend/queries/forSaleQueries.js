const db = require("../db/dbConfig.js");

const getAllForSale = async () => {
    try {
        const allForSalePorsches = await db.any("SELECT * FROM porsches_4_sale");
        return allForSalePorsches
    } catch (error) {
        console.log(error)
    }
};

module.exports =  { getAllForSale }