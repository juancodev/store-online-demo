import {db} from './model.js';

async function createOrder(newOrder){
  const orderRef = db.collection('orders');
  return await orderRef.add(newOrder);
}

export default{
  add: createOrder,
}