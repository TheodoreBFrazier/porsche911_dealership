const db = require("../db/dbConfig.js");

const gt3ModelTechInfo = async (id) => {
try {
    const getStats = await db.one("SELECT * gt3_technical WHERE technical_id=$1", id)
    return getStats
} catch (error) {
    return error 
}
}

module.exports = { gt3ModelTechInfo }