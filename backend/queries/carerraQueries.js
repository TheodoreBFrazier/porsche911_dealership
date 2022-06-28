
//connecting to database

const db = require("../db/dbConfig.js");

const getAllCarreras = async () => {
    try {       
        const allCarreras = await db.any("SELECT * carrera_models_992");
        return allCarreras
    } catch (error) {
        return error;
    }
};

//Export connection

module.exports = {}