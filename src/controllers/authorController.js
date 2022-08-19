const AuthorModel = require("../models/authorModel")

const createAuthorDetail = async function(req ,res){
    let input = req.body
    let authorId = input.author_id
    if(!authorId){
        return res.send({status: false, msg: "author id must be present"})
    }
    let authors = await AuthorModel.create(input)
    //console.log(authors)
    res.send({msg: authors})
}

    const findAuthorDetail = async function(req, rse){
        let input = req.body
        let author = await AuthorModel.find().select({author_id: 1, _id: 0})
        let books = await AuthorModel.find(author)
         res.send({msg:books})
    }

module.exports.createAuthorDetail = createAuthorDetail