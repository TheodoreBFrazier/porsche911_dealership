
//connecting to database

const db = require("../db/dbConfig.js");

const getAllCarreras = async () => {
    try {       
        const allCarreras = await db.many("SELECT * FROM carrera_models");  
        console.log(allCarreras)
         return allCarreras;    
         
     } catch (error) {
        return error;
    }
};

const getCarreraModel = async () => {
    try {
        const getCarreraModel = await db.one("SELECT * FROM carrera_models WHERE model_id=$1", id);
        return getCarreraModel
    } catch (error) {
        return error
    }
}

//Export connection

module.exports = { getAllCarreras, getCarreraModel }