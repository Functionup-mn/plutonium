const mongoose = require('mongoose');

const authorScheema = new mongoose.Schema({
    author_name: String,
        //require: true, 
        author_id:{
   type: Number,
  require: true
},
    age: Number,
    address: String,

   },   {timestamps:true});

   module.exports = mongoose.model('Author', authorScheema)
