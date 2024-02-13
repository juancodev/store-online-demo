import React, { useContext } from 'react';
import { OrderItem } from 'components/OrderItem';
import { AppContext } from 'contexts/AppContext';
import { Menu } from 'components/Menu';
import 'styles/Checkout.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My orders</h1>
        <div className="Checkout-content">
          {state.cart?.map((products, indexValue) => (
            < OrderItem indexValue={indexValue} product={products} key={products.id} />
          ))}
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>{state.cart?.length} articles</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Checkout };