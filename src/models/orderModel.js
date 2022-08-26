const mongoose = require("mongoose");


const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User1'
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    },
    amount: Number,
    isFreeAppUser: Boolean,
    completed:{type:Date, default:Date.now()}
})

module.exports = mongoose.model('Order', orderSchema)