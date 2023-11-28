import express from 'express';
import {addOrder} from './controller.js';
import {success, error} from '../../response/index.js';

const router = express.Router();


router.post('/', (req, res) => {
  addOrder(req.body)
    .then((orderCreated) => {
      success(req, res, orderCreated, 201);
    })
    .catch(err => error(req, res, 'Internal error', 500, err.message));
})

export default router;