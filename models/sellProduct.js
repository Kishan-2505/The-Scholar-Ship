const mongoose = require('mongoose');

const sellProductSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true
    },
    language:{
        type : String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    price_type:{
        type : String,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    item_condition:{
        type: String,
        required: true
    },
    image:{ 
        type: String,
        required: true
    },
    pub_auth:{
        type: String,
        required: true
    },
    mrp:{
        type: Number,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    postalCode:{
        type: Number,
        required: true
    },
    landmark:{
        type:String,
        require:true
    },
    phone_no:{
        type: Number,
        required: true
    },
    publisher:{
        type:String,
        required:true
    }
    
});


const sellProduct = mongoose.model('SellProduct', sellProductSchema);

module.exports = sellProduct;
