import express = require('express');
import { shopEnv } from '../constants/shopEnv';
const router = express.Router();

router.get('/', function (req, res) {
  const todos = ['fork and clone', 'make it better', 'make a pull request']
  res.render('index', {
    todos: todos
  })
});

router.get('/ja/customer/contact-buyer/', function (req, res) {
  res.render('contact-buyer', shopEnv)
});

router.get('/ja/orders/order-confirmation/', function (req, res) {
  res.render('order-confirmation', shopEnv)
});

export { router };
