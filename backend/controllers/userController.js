const express = require("express");
const users = express.Router();

const { getAllUsers, getUser } = require("../queries/userQueries");

users.get("/", async (request, response) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        response.status(200).json(getAllUsers);
        console.log(allUsers)
    } else {
        response.status(500).json({ error: "server error!!" })
    }
});

//View of one user 

users.get("/:id", async (request, response) => {
    const { id } = request.params;
    const user = await getUser(id)
    if (user.user_id) {
        response.json(user)
    } else {
        response.status(404).json({ error: "not found" })
    }
});

module.exports = users;