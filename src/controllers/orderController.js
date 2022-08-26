const OredrModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req, res){
   const order = req.body
if(order.usreId && order.productId){
    let validUserId = await userModel.findById(order.usreId);
    let validProductId = await productModel.findById(order.productId);
    if(validUserId){
        if(validProductId){
            let orderCreated = await OredrModel.create(order)
            res.send({msg: orderCreated, status: true})
        }else{
            res.send({msg:"plz enter a valid product id"})
        }
    }else{
        res.send({msg:"plz enter a valid user id"})
    }
}else{
    res.send({msg:"userId and productId are mandatory"})
}

}

module.exports.createOrder = createOrder