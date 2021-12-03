const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id:{
        type: Number, 
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description: {
       type: String   
    },
    price: {
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:String
    },
    language:{
        type:String,
        required:true
    },
    modal_no:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});


const Product = mongoose.model('product', productSchema);

module.exports = Product;
