const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

     url: {
          type : String,
          required : true
     },


     name: {
        type : String,
        required : true
     },


     weight: {
        type : Number,
        required : true
     },


     
     price: {
        type : Number,
        required : true
     },

    
     stock: {
        type : String,
        required : true
     },
     
     
     category: {
        type : String,
        required : true
     },


     n: {
        type : String,
        required : true
     },




})


module.exports = mongoose.model('Product',productSchema)