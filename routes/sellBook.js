const express = require('express');
const router = express.Router();
const multer = require('multer');
const _=require("lodash");


const { render } = require('ejs');
const { route, checkout } = require('./users');
const { session } = require('passport');

//models
const Cart = require('../models/cart');
const Wishlist = require('../models/wishlist');
const SellProduct = require('../models/sellProduct');



// path to tell where to store image

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' +file.originalname);
  }
});


// filter to store only jpeg ang png format of file
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jfif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//uploding image and checking conditions
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


//to render add book form
router.get('/',function(req,res){
    res.render('sellBooks',{title:"Sell Book"});
});

 // to render ab_redirect after adding book
router.get('/ab_redirect',function(req,res){
  res.render('ab_redirect',{title:"Add New Book"});
});
  
// to add book into database
router.post('/addbook', upload.single('image'), (req, res, next)=>{
  const addproduct = new SellProduct({
      title:_.capitalize(req.body.title),
      language:_.capitalize(req.body.language),
      category:req.body.category,
      price_type:req.body.price_type,
      price: req.body.price,
      item_condition:req.body.item_condition,
      image: req.file.path, 
      pub_auth:req.body.pub_auth,
      mrp:req.body.mrp,
      pages:req.body.pages,
      name:_.capitalize(req.body.name),
      description:_.capitalize(req.body.description),
      address:_.capitalize(req.body.address),
      postalCode:req.body.postalCode,
      landmark:_.capitalize(req.body.landmark),
      phone_no:req.body.phone_no,
      publisher: _.capitalize(req.body.publisher)
  })
  
  addproduct
    .save()
    .then(user => {
      res.redirect('/sellbook/ab_redirect');
    })
    .catch(err => console.log(err));
});
 


module.exports = router; 