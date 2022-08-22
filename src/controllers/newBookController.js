const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const newBookModel = require("../models/newBookModel")

const createNewBooks = async function(req, res){
    let input = req.body
    let newBook = await newBookModel.create(input)
    res.send({msg:newBook})

}

const getBook = async function(req, res){
    let author = await authorModel.findById("authorId")
    let books = await newBookModel.find(author.bookId)
    res.send({msg:books})
}

module.exports.createNewBooks = createNewBooks
module.exports.getBook = getBook