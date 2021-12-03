const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const ejs=require("ejs");
const bodyParser = require("body-parser");
const { Store } = require('express-session');
const mongoStore=require("connect-mongo")(session);
var favicon = require('serve-favicon')
var path = require('path')
const multer = require('multer');
const morgan = require('morgan');
const app = express();

//favicon 
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//morgan to keep log
app.use(morgan('dev'));

// Passport Config
require('./config/passport')(passport);

// Connect to MongoDB
mongoose.connect("mongodb+srv://harbansi:test123@cluster0-ypdnf.mongodb.net/bookstoreDB", { useNewUrlParser: true ,useUnifiedTopology: true});

// EJS
app.set('view engine', 'ejs');

//public folder static path 
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CROS handleling 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    Store: new mongoStore({ mongooseConnection : mongoose.connection}),
    cookie:{ maxAge: 180 * 60 * 1000}
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');  
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  res.locals.user= req.user;
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use('/dashboard', require('./routes/dashboard.js'));
app.use('/sellBook', require('./routes/sellBook.js'));
app.use('/viewBook', require('./routes/viewBook.js'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
