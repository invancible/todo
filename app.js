// Nodejs dependencies
const path = require('path');

// External dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Internal
const router = require('./todo/routes');
require('dotenv').config();

const app = express();

// Template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(router);

// Connection
mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('MongoDB Success!');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
    console.log('MongoDB Failed!');
});