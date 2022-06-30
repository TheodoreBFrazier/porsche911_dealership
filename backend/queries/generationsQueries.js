//connecting to database

const db = require("../db/dbConfig.js");

const getAllGenerations = async () => {
    try {
        const allGenerations = await db.many("SELCT * FROM porsche_911_gens");
        return allGenerations
    } catch (error) {
        return error;
    }
};




module.exports = { getAllGenerations }