const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Cart = require('../models/cart');
const Wishlist = require('../models/wishlist');

const { render } = require('ejs');
const { route, checkout } = require('./users');
const { session } = require('passport');


const SellProduct = require('../models/sellProduct');



router.get('/',ensureAuthenticated,function(req,res){
    SellProduct.find({}, function (err, foundProduct) {
        res.render('viewShopLayout', { user: req.user, title: "USED BOOK ON SALE", products: foundProduct });
    });
});


/*

------------
future use |
------------

router.get('/novel', ensureAuthenticated, function (req, res) {
    SellProduct.find({"category":"novel"}, function (err, foundProduct) {
        if (foundProduct.length === 0) {
        SellProduct.insertMany(products, function (err) {
            if (err) {
            console.log("error");

            } else {
            console.log("successfully inserted");
            }
        });
        res.redirect('/novel');
        } else {
        res.render('categoryLayout', { user: req.user, title: "NOVEL", products: foundProduct});
        }
    });
});

*/ 

module.exports = router; 