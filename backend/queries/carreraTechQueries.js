const db = require("../db/dbConfig.js");

const carreraModelTechInfo = async (id) => {
try {
    const getStats = await db.one("SELECT * carrera_technical WHERE technical_id=$1", id)
    return getStats
} catch (error) {
    return error 
}
}

module.exports = { carreraModelTechInfo }