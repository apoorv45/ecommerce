const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers')

/* GET All Orders */
router.get('/',(req, res) => {
  database.table('orders_details as od')
      .join([
        {
          table: 'orders as o',
          on: 'o.id = od.order_id'
        },
        {
          table: 'products as p',
          on: 'p.id = od.product_id'
        },
        {
          table: 'users as u',
          on: 'u.id = o.user_id'
        }
      ])
      .withFields(['o.id', 'p.title', 'p.description', 'p.price', 'u.username'])
      .sort({id: 1})
      .getAll()
      .then(orders => {
        if (orders.length > 0) {
          res.status(200).json(orders);
        } else {
          res.json({message: "No orders found"});
        }

      }).catch(err => res.json(err));


});


/* GET Single Orders */
router.get('/:id',(req, res) => {
    const orderId = req.params.id;


  database.table('orders_details as od')
      .join([
        {
          table: 'orders as o',
          on: 'o.id = od.order_id'
        },
        {
          table: 'products as p',
          on: 'p.id = od.product_id'
        },
        {
          table: 'users as u',
          on: 'u.id = o.user_id'
        }
      ])
      .withFields(['o.id', 'p.title', 'p.description', 'p.price', 'u.username'])
      .filter({'o.id': orderId})
      .getAll()
      .then(orders => {
        if (orders.length > 0) {
          res.status(200).json(orders);
        } else {
          res.json({message: `No orders found with orderId ${orderId}`});
        }

      }).catch(err => res.json(err));

});


/* Place a New Order */
router.post('/new',(req,res) => {
       //let userId = req.body.userId;

             let {userId,products} = req.body;
               console.log(userId, products);



});

module.exports = router;
