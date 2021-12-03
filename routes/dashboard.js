const express = require('express');
const router = express.Router();
const Product = require('../models/product');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const products = require('../seed/productSeeder');

const Cart = require('../models/cart');
const Wishlist = require('../models/wishlist');

const { render } = require('ejs');
const { route, checkout } = require('./users');
const { session } = require('passport');


// Dashboard
router.get('/', ensureAuthenticated, function (req, res) {

  Product.find({"category":"mainPage"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log(err);

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/dashboard');
    } else {
      res.render('dashboard', { user: req.user, title: "bookstore", products: foundProduct });
    }
  });
});


router.get('/novel', ensureAuthenticated, function (req, res) {

  Product.find({"category":"novel"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/novel');
    } else {
      res.render('shopLayout', { user: req.user, title: "NOVEL", products: foundProduct});
    }
  });

});

router.get('/engineering', ensureAuthenticated, function (req, res) {
  Product.find({"category":"engineering"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/engineering');
    } else {
      res.render('shopLayout', { user: req.user, title: "ENGINEERING", products: foundProduct });
    }
  });
});

router.get('/arts', ensureAuthenticated, function (req, res) {
  Product.find({"category":"arts"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/arts');
    } else {
      res.render('shopLayout', { user: req.user, title: "ARTS", products: foundProduct });
    }
  });
});


router.get('/medical', ensureAuthenticated, function (req, res) {
  Product.find({"category":"medical"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/medical');
    } else {
      res.render('shopLayout', { user: req.user, title: "MEDICAL", products: foundProduct });
    }
  });
});


router.get('/law', ensureAuthenticated, function (req, res) {
  
  Product.find({"category":"law"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/law');
    } else {
      res.render('shopLayout', { user: req.user, title: "LAW", products: foundProduct });
    }
  });
});

router.get('/business', ensureAuthenticated, function (req, res) {
  Product.find({"category":"business"}, function (err, foundProduct) {
    if (foundProduct.length === 0) {
      Product.insertMany(products, function (err) {
        if (err) {
          console.log("error");

        } else {
          console.log("successfully inserted");
        }
      });
      res.redirect('/business');
    } else {
      res.render('shopLayout', { user: req.user, title: "BUSINESS", products: foundProduct});
    }
  });
});

/*
//sell book option
router.get('/sellBook',function(req,res){
  res.render('sellBook',{title:"Sell Book"});
})
*/

module.exports = router; 
