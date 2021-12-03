const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const products = require('../seed/productSeeder');
const sendMail = require('./email');


const Cart = require('../models/cart');
const Wishlist = require('../models/wishlist');
const SellProduct = require('../models/sellProduct');
const sellProduct = require('../models/sellProduct');

const { render } = require('ejs');
const { route, checkout } = require('./users');

// Welcome Page
router.get('/', function (req, res) {

  res.render('welcome', { title: "bookstore" });
});


// for add to cart
router.get("/add-to-cart/:id", function (req, res) {
  
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('back');
    } else {
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);

      res.redirect('back');

    }
  });

});
// for viewused book
router.get("/addToCart/:id", function (req, res) {
  console.log(req.session.current_url);
  
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  SellProduct.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('back');
    } else {
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);

      res.redirect('back');

    }
  });

});

router.get('/reduce/:id', function(req,res){
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  cart.reduceByOne(productId);
  req.session.cart=cart;
  res.redirect('/shoppingCart');

})

router.get('/increase/:id', function(req,res){
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  cart.increaseByOne(productId);
  req.session.cart=cart;
  res.redirect('/shoppingCart');

})

router.get('/remove/:id', function(req,res){
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  cart.removeItem(productId);
  req.session.cart=cart;
  res.redirect('/shoppingCart');

})


// for add to wishlist
router.get("/add-to-wishlist/:id", function (req, res) {

  const productId = req.params.id;
  const wishlist = new Wishlist(req.session.wishlist ? req.session.wishlist : { items: {} });
  

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('back');
    } else {
      wishlist.add(product, product.id);
      req.session.wishlist = wishlist;
      console.log(req.session.wishlist);

      res.redirect('back');

    }
  });

});

//for viewused book
router.get("/addToWishlist/:id", function (req, res) {

  const productId = req.params.id;
  const wishlist = new Wishlist(req.session.wishlist ? req.session.wishlist : { items: {} });
  

  sellProduct.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('back');
    } else {
      wishlist.add(product, product.id);
      req.session.wishlist = wishlist;
      console.log(req.session.wishlist);

      res.redirect('back');

    }
  });

});

router.get('/removeFromWishlist/:id', function(req,res){
  const productId = req.params.id;
  const wishlist = new Wishlist(req.session.wishlist ? req.session.wishlist: { items: {} });

  wishlist.removeItem(productId);
  req.session.wishlist=wishlist;
  res.redirect('/wishlist');

});

router.get("/shoppingCart",ensureAuthenticated, function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shoppingCart', { products: null, title: "Shopping-cart" });
  }

  var cart = new Cart(req.session.cart);
  res.render('shoppingCart', { products: cart.generateArray(), totalPrice: cart.totalPrice, totalQuantity: cart.totalQuantity, title: "shopping- cart" });
});

router.get("/wishlist",ensureAuthenticated, function (req, res, next) {
  if (!req.session.wishlist) {
    return res.render('wishlist', { products: null, title: "Wishlist" });
  }

  var wishlist = new Wishlist(req.session.wishlist);
  res.render('wishlist', { products: wishlist.generateArray(), totalQuantity: wishlist.totalQuantity, title: "Wishlist" });
});

router.get('/checkout',ensureAuthenticated, function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shoppingCart');
  }
  var cart = new Cart(req.session.cart);
  res.render('checkout', { total: cart.totalPrice, title: "checkout" });

});


router.post('/checkout', function (req, res, next) {

    req.session.cart = null;
    res.redirect('/final');

});

router.get('/final',ensureAuthenticated, function (req, res) {
  res.render('final', { title: "Thank You" });
});


router.post('/email', function(req, res) {
  const { name, email, title, message } = req.body
  sendMail(name, email, title, message, function(err, data) {
    if(err){
      res.send(500).json({msg: ' Internal Error'})
    } else {
      console.log(data);
      res.redirect('back');
    }
  })
})


module.exports = router; 
