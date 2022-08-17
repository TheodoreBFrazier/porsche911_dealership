//connecting to database

const db = require("../db/dbConfig.js");

const getAllGt3s = async () => {
    try {       
        const allGt3s = await db.any("SELECT * FROM gt3_models");  
        console.log(allGt3s)
        return allGt3s;    
         
     } catch (error) {
        return error;
    }
};

const getGt3Model = async (id) => {
    try {
        const getGt3Model = await db.one("SELECT * FROM gt3_models WHERE gt3_id=$1", id);
        return getGt3Model
    } catch (error) {
        return error
    }
}

//Export connection

module.exports = { getAllGt3s, getGt3Model }