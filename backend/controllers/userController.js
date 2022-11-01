const express = require("express");
const users = express.Router();

const { getAllUsers, getUser, createUser } = require("../queries/userQueries");

users.get("/", async (request, response) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        response.status(200).json(allUsers)
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


//Create a user

users.post("/", async (request, response) => {
    const user = request.body;
    const createdUser = await createUser(user);
    if (createdUser.user_id) {
        response.json( { success: true, result: createdUser});    
    } else
    response.status(500).json({ success: false, error: "unable to create user"})
});

module.exports = users;