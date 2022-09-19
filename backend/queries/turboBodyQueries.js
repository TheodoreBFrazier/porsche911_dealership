const db = require("../db/dbConfig.js");

const turboModelBodyInfo = async (id) => {
try {
    const getStats = await db.one("SELECT * turbo_body_stats WHERE technical_id=$1", id)
    return getStats
} catch (error) {
    return error 
}
}

module.exports = { turboModelBodyInfo }