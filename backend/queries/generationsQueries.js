//connecting to database

const db = require("../db/dbConfig.js");

const getAllGenerations = async () => {
    try {
        const allGenerations = await db.many("SELECT * FROM porsche_911_gens");
        return allGenerations;
    } catch (error) {
        return error;
    }
};

const showOneGeneration = async () => {
    try {
        const oneGeneration = await db.one("SELECT * FROM porsche_911_gens WHERE gen_id=$1", id);
        return oneGeneration;
    } catch (error) {
        return error;
    }
};



module.exports = { getAllGenerations, showOneGeneration }