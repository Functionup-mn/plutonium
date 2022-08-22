const AuthorModel = require("../models/authorModel")
const newBookModel = require("../models/newBookModel")
const NewBookModel = require("../models/newBookModel")

const createAuthor = async function(req ,res){
    let input = req.body
    var authorId = input.author_id
    if(!authorId){
        return res.send({status: false, msg: "author id must be present"})
    }
    let authors = await AuthorModel.create(input)
    //console.log(authors)
    res.send({msg: authors})
}

    const findAuthorDetail = async function(req, res){
        let author = await (await AuthorModel.findOne({author_name: "Chetan Bhagat"}).select({author_id: 1, _id: 0}))
        let specificBooks = await NewBookModel.find(author)
         res.send({msg:specificBooks})
    }

    const updateBook = async function(req, res){
        let book = await (await NewBookModel.findOneAndUpdate(
            {name: "Two states"},
            {$set: {price: 100}},
            {new: true}))
        let updatedBook = await NewBookModel.find(book)
        res.send({msg:updatedBook}) 
    }

    const newBook = async function(req, res){
        let myBook = await NewBookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
        
    }

module.exports.createAuthor = createAuthor
module.exports.findAuthorDetail = findAuthorDetail
module.exports.updateBook = updateBook