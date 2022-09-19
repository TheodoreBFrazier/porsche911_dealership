const db = require("../db/dbConfig.js");

const carreraModelBodyInfo = async (id) => {
try {
    const getStats = await db.one("SELECT * carrera_body_stats WHERE technical_id=$1", id)
    return getStats
} catch (error) {
    return error 
}
}

module.exports = { carreraModelBodyInfo }