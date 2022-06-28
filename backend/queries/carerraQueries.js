
//connecting to database

const db = require("../db/dbConfig.js");

const getAllCarreras = async () => {
    try {       
        const allCarreras = await db.many("SELECT * FROM carrera_models");  
        console.log(allCarreras)
         return allCarreras    
         
     } catch (error) {
        return error;
    }
};

//Export connection

module.exports = { getAllCarreras }