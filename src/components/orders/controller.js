import store from './store.js';

export function addOrder(newOrder) {
  return new Promise((resolve, reject) => {
    if (newOrder.length === 0) {
      console.log("[OrdersController]: newOrder doesn't have content, the newOrder is empty");
      reject('There is no newOrder');
    }

    store.add(newOrder);
    resolve(newOrder);
  });
};