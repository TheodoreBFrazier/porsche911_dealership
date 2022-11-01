const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

const authorizeUser = async (user_name, password) => {
    try {
        const user = await db.one(
            "SELECT * FROM users WHERE user_name=$1", user_name
        );
        const sucessfulMatch = await bcrypt.compare(password, user.password);
        if (sucessfulMatch) {
            const userInformation = {
                user_id: user.user_id,
                user_name: user.user_name,
            };
            return userInformation;
        }
    } catch (error) {
        return { error: "Username doesn't exist." }
    }

};

module.exports = {
    authorizeUser,
};