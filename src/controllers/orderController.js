const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req, res){
   const order = req.body
   let idOfUser = order.userId
   let idOfProduct = order.productId

   if(!idOfUser){
       return res.send({msg:"userId is mandatory"})    // we can write in a single line and without curly braces
   }
   let validUserId = await userModel.findById(idOfUser);
   if(!validUserId){
       return res.send({msg:"plz enter a valid user id"})
   }
   if(!idOfProduct){
    return res.send({msg:"productId is mandatory"}) 
   }
   let validProductId = await productModel.findById(idOfProduct);
   if(!validProductId){
       return res.send({msg:"plz enter a valid product id"})
   }
   let orderCreated = await orderModel.create(order)
   res.send({msg:orderCreated, status: true})

const updateOrder = async function (req, res){
    let orderDetail = await orderModel.populate('userId', 'productId')
    let newOrder = await orderModel.findOneAndUpdate()
}
// if(order.usreId && order.productId){
//     let validUserId = await userModel.findById(order.usreId);
//     let validProductId = await productModel.findById(order.productId);
//     if(validUserId){
//         if(validProductId){
//             let orderCreated = await OredrModel.create(order)
//             res.send({msg: orderCreated, status: true})
//         }else{
//             res.send({msg:"plz enter a valid product id"})
//         }
//     }else{
//         res.send({msg:"plz enter a valid user id"})
//     }
// }else{
//     res.send({msg:"userId and productId are mandatory"})
// }

}

module.exports.createOrder = createOrder