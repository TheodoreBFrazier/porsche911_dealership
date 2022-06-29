//connecting to database

const db = require("../db/dbConfig.js");

const getAllTurbos = async () => {
    try {       
        const allTurbos = await db.many("SELECT * FROM turbo_models");  
        console.log(allTurbos)
         return allTurbos;    
         
     } catch (error) {
        return error;
    }
};

const getTurboModel = async (id) => {
    try {
        const getTurboModel = await db.one("SELECT * FROM turbo_models WHERE turbo_id=$1", id);
        return getTurboModel
    } catch (error) {
        return error
    }
}

//Export connection

module.exports = { getAllTurbos, getTurboModel }