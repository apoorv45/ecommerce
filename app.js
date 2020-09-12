const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Imports routes
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

// use Routes
app.use('/api/products',productsRoute);
app.use('/api/orders', ordersRoute);


app.use(cors({
    origin: "*",
    methods: ['GET','POST','PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type , Authorization, Origin, X-Requested-With, Accept'
}));


app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
