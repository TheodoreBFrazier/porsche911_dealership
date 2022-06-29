//connecting to database

const db = require("../db/dbConfig.js");

const getAllGt3s = async () => {
    try {       
        const allGt3s = await db.many("SELECT * FROM gt3_models");  
        console.log(allGt3s)
        return allGt3s;    
         
     } catch (error) {
        return error;
    }
};

//Export connection

module.exports = { getAllGt3s }