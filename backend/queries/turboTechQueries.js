const db = require("../db/dbConfig.js");

const turboModelTechInfo = async (id) => {
    try {
        const getStats = await db.one("SELECT * turbo_technical WHERE technical_id=$1", id)
        return getStats
    } catch (error) {
        return error
    }
}

module.exports = { turboModelTechInfo }