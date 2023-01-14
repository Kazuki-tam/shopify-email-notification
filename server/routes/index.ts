import express = require('express');
import { emailEnv } from '../constants/emailEnv';
import { linkList } from '../constants/linkList';

const router = express.Router();
const ordersList = linkList.filter((item) => item.category === 'orders');
const shippingList = linkList.filter((item) => item.category === 'shipping');
const localDeliveryList = linkList.filter(
  (item) => item.category === 'local_delivery',
);
const localPickupList = linkList.filter(
  (item) => item.category === 'local_pickup',
);
const customerList = linkList.filter((item) => item.category === 'customer');
const emailMarketingList = linkList.filter(
  (item) => item.category === 'email_marketing',
);
const returnsList = linkList.filter((item) => item.category === 'returns');
// const staffOrderNotificationsList = linkList.filter(
//   (item) => item.category === 'staff_order_notifications',
// );
const listObject = {
  ordersList: ordersList,
  shippingList: shippingList,
  localDeliveryList: localDeliveryList,
  localPickupList: localPickupList,
  customerList: customerList,
  emailMarketingList: emailMarketingList,
  returnsList: returnsList,
  // staffOrderNotificationsList: staffOrderNotificationsList,
};

router.get('/', (_req, res) => {
  res.render('index', listObject);
});

router.get('/en', (_req, res) => {
  res.redirect('/');
});

router.get('/ja', (_req, res) => {
  res.render('ja', listObject);
});

// Customer
router.get('/customer/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Email marketing
router.get('/email-marketing/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Local delivery
router.get('/local-delivery/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Local pickup
router.get('/local-pickup/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Orders
router.get('/orders/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Returns
router.get('/returns/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Shipping
router.get('/shipping/:name', (req, res) => {
  res.render(req.params.name, emailEnv);
});

// Staff order notifications
// router.get('/staff-order-notifications/:name', (req, res) => {
//   res.render(req.params.name, emailEnv);
// });

export { router };
