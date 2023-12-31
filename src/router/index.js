import express from 'express';
import order from '../components/orders/router.js';
import payment from '../components/pay/router.js';

const router = express.Router();

export function routerApp(app) {
  app.use('/api/v1',router);
  router.use('/orders', order);
  router.use('/create-payment-intent', payment);
}