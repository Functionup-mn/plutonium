const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: {
        type:Number,
        default: 100
    },
    address: String,
    age: Number,
   // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "Other"] //"falana" will give an error
    },
    isFreeAppUser:{
        type: Boolean,
        //default: "false"
    }
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User1', userSchema) //user


// String, Number
// Boolean, Object/json, array