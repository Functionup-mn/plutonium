const NewPublisherModel = require ("../models/newPublisherModel")

const createPublisher = async function(req, res){
    let publisher = req.body
    let publisherCreated = await NewPublisherModel.create(publisher)
    res.send({msg: publisherCreated})

}
const getPublisherData= async function (req, res) {
    let authors = await NewPublisherModel.find()
    res.send({data: authors})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData