const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');


/* GET All Products. */
router.get('/', function(req, res ) {
let page = (req.query.page != undefined && req.query.page != 0) ? req.query.page : 1; // set the current page number
const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 1; // set the limit  of items per page

  let startValue;
  let endValue;

  if(page > 0) {
    startValue = (page * limit) - limit;   //0,10,20,30
    endValue = page * limit
  }











});

module.exports = router;
