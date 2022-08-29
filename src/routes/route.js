const express = require('express');
const myUserController = require("../controllers/myUserController");
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

// Assignment 26Aug

router.post("/myUser", myUserController.createNewUser)

router.post("/loginMyUser", myUserController.loginNewUser)

router.get("/myUser/:usreId", myUserController.getNewUserData)

router.put("/myUser/:usreId", myUserController.updateNewUser)

module.exports = router;