const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newPublisherController = require("../controllers/newPublisherController")
const newBookController= require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newAuthorController.createAuthor)

router.get("/getAuthorsData", newAuthorController.getAuthorsData)

router.post("/createPublisher", newPublisherController.createPublisher)

router.get("/getPublisherData", newPublisherController.getPublisherData)

router.post("/createBook", newBookController.createBook)

router.get("/getBooksData", newBookController.getBooksData)

router.get("/getBooksWithAuthorDetails", newBookController.getBooksWithAuthorDetails)

router.post("/books", newBookController.books)


module.exports = router;