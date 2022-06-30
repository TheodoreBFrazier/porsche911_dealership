//connecting to database

const db = require("../db/dbConfig.js");

const getAllGenerations = async () => {
    try {
        const allGenerations = await db.many("SELECT * FROM porsche_911_gens");
        return allGenerations
    } catch (error) {
        return error;
    }
};




module.exports = { getAllGenerations }