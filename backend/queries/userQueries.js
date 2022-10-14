const db = require("../db/dbconfig.js");

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        console.log(allUsers)
        return allUsers
    } catch (error) {
        return error;
    }
}

const getUser = async (id) => {
    try {
        const getUser = await db.one("SELECT * FROM users WHERE user_id=$1", id);
        return getUser
    } catch (error) {
        return error
    }
}

module.exports { getAllUsers, getUser }