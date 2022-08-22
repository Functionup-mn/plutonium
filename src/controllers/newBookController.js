const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")

const createBook = async function (req, res) {
    let book = req.body
    //sol a, b, c, d
    if(book.author && book.publisher){
        let validAuthorId = await newAuthorModel.findById(book.author);
        let validPublisherId = await newPublisherModel.findById(book.publisher);
        if(validAuthorId){
            if(validPublisherId){
                let bookCreated = await newBookModel.create(book)
                res.send({data: bookCreated, status: true})
            }else
                res.send({msg:"pleas enter a valid publisher id"})
            
        }else
            res.send({msg: "please enter a valid author id"})
        
    }else
        res.send({msg: "authorId and publisherId fields are mandatory"})
    
}

const getBooksData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

const books = async function(req, res){
    let updatedBook = await newBookModel.findOneAndUpdate(
        {name: "'Penguin', 'HarperCollins'"},
       {rating: {$gt: 3.5}},     // condition
        {$set: {isHardCover: true}}, {$set:{price: "price" + 10}})  // change that you want 

        res.send({msg: updatedBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.books = books